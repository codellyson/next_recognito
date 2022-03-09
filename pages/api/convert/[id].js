import nextConnect from "next-connect";
import { deleteImage, getImage } from "../../../db/imageStorage";
import database from "../../../lib/mongodb";
import fs from "fs";
import { ncOpts } from "../../../lib/ncOpts";
const handler = nextConnect(ncOpts);
handler.use(database);
handler.delete(async (req, res) => {
  const { id } = req.query;
  try {
    const image = await getImage(req.db, id);
    const isDeleted = await deleteImage(req.db, image._id);
    if (isDeleted) {
      fs.unlinkSync(`${image.filePath}`);
      return res.status(200).json({ message: "success" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default handler;