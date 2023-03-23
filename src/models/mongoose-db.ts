import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
let isConnected;
let database;

export const connectToDatabase = () => {
  if (process.env.APP === 'local') {
    database = process.env.OFFLINE_DB;
  } else {
    database = process.env.DEV_DB;
  }

  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  return mongoose.connect(database, {})
    .then(db => {
      console.log('=> using new database connection: %s', database);
      isConnected = db.connections[0].readyState;
    });
};