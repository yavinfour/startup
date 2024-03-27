const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const fs = require('fs/promises'); // Using fs.promises for async file operations

const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
async function startServer() {
  app.use(express.json());
  app.use(cookieParser());

  // Serve up the front-end static content hosting
  app.use(express.static('public'));

  app.set('trust proxy', true);

  // Router for service endpoints
  var apiRouter = express.Router();
  app.use(`/api`, apiRouter);

  // Initialize favs by reading from the file or using an empty array if the file doesn't exist
  let favs = [];

  apiRouter.post('/auth/create', async (req, res) => {
    // Implementation for user creation
  });

  // Other auth-related routes...

  // Router for authenticated endpoints
  var secureApiRouter = express.Router();
  apiRouter.use(secureApiRouter);

  secureApiRouter.use(async (req, res, next) => {
    // Authentication middleware
  });

  // GetFavs route
  secureApiRouter.get('/favs', async (req, res) => {
    try {
      const favorites = await DB.getFavs();
      res.send(favorites);
    } catch (error) {
      console.error('Error retrieving favorites:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  // SubmitFav route
  secureApiRouter.post('/fav', async (req, res) => {
    try {
      const { newFav } = req.body;
      await DB.addFav(newFav); // Add new favorite to MongoDB
      const favorites = await DB.getFavs(); // Retrieve updated favorites
      res.send(favorites);
    } catch (error) {
      console.error('Error adding favorite:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  // ClearFavs route
  secureApiRouter.delete('/favs', async (req, res) => {
    try {
      await DB.clearFavs(); // Clear favorites from MongoDB
      const favorites = await DB.getFavs(); // Retrieve updated favorites
      res.send(favorites);
    } catch (error) {
      console.error('Error clearing favorites:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Default error handler
  app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });

  // Return the application's default page if the path is unknown
  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

startServer();