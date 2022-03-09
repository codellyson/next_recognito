import { MongoClient } from "mongodb";
global.mongo = global.mongo || {};

let indexesCreated = false;
async function createIndexes(db) {
  const collection = db.collection("ImageStorage");
  await collection.createIndex({}, { unique: true });
  indexesCreated = true;
}
export async function getMongoClient() {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.MONGODB_URI);
  }

  await global.mongo.client.connect();
  return global.mongo.client;
}

export default async function database(req, res, next) {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.MONGODB_URI);
  }
  req.dbClient = await getMongoClient();
  req.db = req.dbClient.db();
  // if (!indexesCreated) await createIndexes(req.db);
  return next();
}
