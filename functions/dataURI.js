import path from "path";
import DatauriParser from "datauri/parser";
const parser = new DatauriParser();

export const convertToDataURI = async (file) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);
