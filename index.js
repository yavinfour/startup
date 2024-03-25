const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js')
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
try {
  const favoritesData = await fs.readFile('favs.json', 'utf-8');
  if (favoritesData) {
    favs = JSON.parse(favoritesData);
  }
} catch (error) {
  console.error('Error reading favorites file:', error);
}


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
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});


// GetFavs
secureApiRouter.get('/favs', (_req, res) => {
  res.send(favs);
});

// SubmitFav
secureApiRouter.post('/fav', async (req, res) => {
  try {
    const { newFav, existingFavs } = req.body;

    // Update the favs array
    favs = await updateFavs(newFav, existingFavs);

    // Send the updated favs array as a response
    res.send(favs);
  } catch (error) {
    console.error('Error updating favorites file:', error);
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

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

secureApiRouter.delete('/favs', async (req, res) => {
  try {

    // Update the favs array
    favs = await clearFavs();

    // Send the updated favs array as a response
    res.send(favs);
  } catch (error) {
    console.error('Error updating favorites file:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateFavs considers a new favorite for inclusion in the favorites list.
// The favorites are saved in a file and persist between service restarts.
async function updateFavs(newFav, oldFavs) {
  let existingFavs = [...new Set(oldFavs)];
  existingFavs.push(newFav);

  if (existingFavs.length > 10) {
    existingFavs.length = 10;
  }

  // Save the updated favorites to a file
  if (existingFavs.length > 0) {
    await fs.writeFile('favs.json', JSON.stringify(existingFavs));
  }

  return existingFavs;
}

async function clearFavs() {
  try {
    await fs.writeFile('favs.json', '[]');
    console.log('favs.json cleared successfully.');
    return [];
  } catch (error) {
    console.error('Error clearing favorites:', error);
    return [];
  }
}
}

startServer();