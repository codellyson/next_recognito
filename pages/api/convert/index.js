import nextConnect from "next-connect";
import { uploadImage } from "../../../functions/multer";
import database from "../../../lib/mongodb";
import { insertImage, getImages } from "../../../db/imageStorage";
import { ncOpts } from "../../../lib/ncOpts";
import { uploader } from "../../../functions/cloudinary";
import { promisify } from "util";
import { unlink } from "fs";
const unlinkAsync = promisify(unlink);
const handler = nextConnect(ncOpts);

handler.use(database);
handler.get(async (req, res) => {
  try {
    const imageFiles = await getImages(req.db);
    return res.status(200).json({ message: "success", file: imageFiles });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
});

handler.post(uploadImage.array("imageFile"), async (req, res) => {
  try {
    const files = req.files;
    let image;

    files.forEach(async function (file) {
      const uploadedImage = await uploader(file.path);
      await insertImage(req.db, uploadedImage);
      await unlinkAsync(file.path);
    });

    return res
      .status(201)
      .json({ message: "file uploaded successfully", file: image });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
