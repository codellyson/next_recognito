import nextConnect from "next-connect";
import { deleteImage, getImage } from "../../../db/imageStorage";
import database from "../../../lib/mongodb";
import { ncOpts } from "../../../lib/ncOpts";
import { deleteCloudImage } from "../../../functions/cloudinary";
const handler = nextConnect(ncOpts);
handler.use(database);
handler.delete(async (req, res) => {
  const { id } = req.query;
  try {
    const image = await getImage(req.db, id);
    await deleteImage(req.db, image._id);
    deleteCloudImage(image.fileName);
    return res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default handler;
