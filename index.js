const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');
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

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

  secureApiRouter.use(async (req, res, next) => {
    // Authentication middleware
  });

  secureApiRouter.use(async (req, res, next) => {
    const authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
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

  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

  const httpsService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
  peerProxy(httpsService);
}


startServer();