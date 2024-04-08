const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}.gm4fsbn.mongodb.net`;

const client = new MongoClient(url);
const db = client.db('traveler');
const userCollection = db.collection('user');
const favCollection = db.collection('favs');

// Ensure indexes for efficient querying
favCollection.createIndex({ userEmail: 1 });
favCollection.createIndex({ allFavs: 2 });

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("Valid Connection Established");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addFav(fav) {
  try {
    // Specify the filter criteria to identify the document to be replaced
    const filter = { index: fav.index }; // Assuming 'index' is used to uniquely identify the document

    // Replace the existing document with the new 'fav' object
    const result = await favCollection.replaceOne(filter, fav, { upsert: true }); // 'upsert: true' will insert if document doesn't exist
    console.log('Fav added or replaced successfully:', result);
    return result; // Return the result of the operation
  } catch (error) {
    console.error('Error adding or replacing fav:', error);
    throw error; // Re-throw the error to propagate it
  }
}

async function getFavs(userEmail) {
  const query = { userEmail: userEmail };
  const options = {
    projection: { allFavs: 1, _id: 0 }, // Only include the allFavs field in the result
    limit: 10,
  };
  const cursor = favCollection.find(query, options);
  const docs = await cursor.toArray();
  const allFavs = docs.map(doc => doc.allFavs); // Extract allFavs from each document
  return allFavs;
}

async function clearFavs(user) {
  try {
    // Construct the query to match documents based on userEmail
    const query = { userEmail: user };

    // Delete all documents matching the query from the collection
    const deleteResult = await favCollection.deleteMany(query);

    // Log the number of documents deleted (optional)
    console.log(`Deleted ${deleteResult.deletedCount} favorites for userEmail: ${user}`);

    // Return the delete result
    return deleteResult;
  } catch (error) {
    // Handle any errors that occur during the delete operation
    console.error('Error clearing favorites:', error);
    throw new Error('Failed to clear favorites');
  }
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addFav,
  getFavs,
  clearFavs,
};
