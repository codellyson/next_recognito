import { ObjectId } from "mongodb";

export async function insertImage(db, file) {
  try {
    const collection = db.collection("ImageStorage");
    const image = await collection.insertOne({
      fileName: file.id,
      filePath: file.url,
    });
    return image;
  } catch (error) {
    return error;
  }
}
export async function getImages(db) {
  try {
    const ImageCollection = db.collection("ImageStorage");
    const images = await ImageCollection.find().toArray();
    return images;
  } catch (error) {
    return error;
  }
}
export async function getImage(db, id) {
  try {
    const collection = db.collection("ImageStorage");
    const image = await collection.findOne({
      _id: ObjectId(id),
    });

    return image;
  } catch (error) {
    return error;
  }
}

export async function deleteImage(db, id) {
  try {
    const collection = db.collection("ImageStorage");
    const image = await collection.deleteOne({
      _id: ObjectId(id),
    });
    return image;
  } catch (error) {
    return error;
  }
}
