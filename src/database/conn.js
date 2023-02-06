import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongodbServer;
const dbName = process.env.DB_NAME || 'credit-card-db'
mongoose.set('strictQuery', false);

const mongooseOpts = {
  useNewUrlParser: true,
  dbName
};

/**
 * @description - Provide connection to a new in-memory database server.
 */
const connect = async () => {
  mongodbServer = await MongoMemoryServer.create();
  const uri = await mongodbServer.getUri();
  console.log('Mongo Server URL:' + uri)
  await mongoose.connect(uri, mongooseOpts, err => {
    if (err) {
      console.error(err);
    }
  });
}

/**
 * Drop database, close the connection and stop in-memory server.
 */
const close = async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongodbServer.stop();
    console.log('in memory server closed successfully')
  } catch (e) {
    console.log(e);
  }
}

export { connect, close }
