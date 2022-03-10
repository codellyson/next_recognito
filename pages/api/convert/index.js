import nextConnect from "next-connect";
import { uploadImage } from "../../../functions/multer";
import database from "../../../lib/mongodb";
import { insertImage, getImages } from "../../../db/imageStorage";
import { ncOpts } from "../../../lib/ncOpts";
import { uploader } from "../../../functions/cloudinary";
import { convertToDataURI } from "../../../functions/dataURI";
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
      const treatedFile = (await convertToDataURI(file)).content;
      const uploadedImage = await uploader(treatedFile);
      await insertImage(req.db, uploadedImage);
    });
    return res
      .status(201)
      .json({ message: "file uploaded successfully", file: image });
  } catch (error) {
    res.status(400).json({ error });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
