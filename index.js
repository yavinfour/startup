const express = require('express');
const app = express();
const fs = require('fs/promises'); // Using fs.promises for async file operations

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
async function startServer() {
  app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
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

// GetFavs
apiRouter.get('/favs', (_req, res) => {
  res.send(favs);
});

// SubmitFav
apiRouter.post('/fav', async (req, res) => {
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

apiRouter.delete('/favs', async (req, res) => {
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