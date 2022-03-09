import nextConnect from "next-connect";
import { getImage } from "../../db/imageStorage";
import database from "../../lib/mongodb";
import { ncOpts } from "../../lib/ncOpts";
import { ocrSpace } from "ocr-space-api-wrapper";

const handler = nextConnect(ncOpts);
handler.use(database);
handler.post(async (req, res) => {
  try {
    const { id } = req.body;
    const singleFile = await getImage(req.db, id);

    const text = await ocrSpace(singleFile.filePath, {
      apiKey: process.env.OCR_KEY,
      URL: process.env.OCR_URL,
      OCREngine: 2,
    });
    const result = text.ParsedResults[0].ParsedText;
    return res.status(200).json({
      message: "conversion completed",
      result,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default handler;
