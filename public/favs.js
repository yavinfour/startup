
class AddFav {
  constructor() {

    const userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'New User';
    }
}

const game = new AddFav();


/* This function is going to take in a parameter given when you click on a specific box.
Normally this would call data from the database but for js we're hardcoding information 
Then we're going to create a card using that information (the name will be found using the index
  on the states array and the info same idea on the info array)
  Then we just plug those strings in as information for the card.*/

document.addEventListener('DOMContentLoaded', () => {
populateCards();
});

async function populateCards() {
  // Retrieve favorites array from localStorage
  let favArray = [];
  try {
    // Fetch favArray from the backend
    const response = await fetch('/api/favs');
    if (!response.ok) {
      throw new Error('Failed to fetch favArray from the backend');
    } 
    favArray = await response.json();
    favArray = new Set(favArray);
  } catch (error) {
    console.error("You failed in your quest. Error: ", error);
  }
  
  // Convert to Set

  

// Retrieve states array from localStorage

let storedStates;
  try {
    storedStates = JSON.parse(localStorage.getItem('states')) ?? [];
    if (!Array.isArray(storedStates)) {
      throw new Error('Invalid JSON format');
    }
    // Convert stored numbers from string to actual numbers
  } catch (error) {
    console.error('Error parsing stored favorites:', error);
    storedStates = [];
  }

  states = storedStates;
// Retrieve stateFacts array from localStorage

let storedFacts;
  try {
    storedFacts = JSON.parse(localStorage.getItem('stateFact')) ?? [];
    if (!Array.isArray(storedFacts)) {
      throw new Error('Invalid JSON format');
    }
    // Convert stored numbers from string to actual numbers
  } catch (error) {
    console.error('Error parsing stored favorites:', error);
    storedFacts = [];
  }

  stateFacts = storedFacts;


console.log('favArray:', Array.from(favArray));

  const newFacts = document.querySelector('#dbinfo');
  const existingCards = document.querySelectorAll('.card');
existingCards.forEach(card => card.remove());

for (const index of favArray) {
  state = states[index];
  console.log(`${state}`);
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '300px';
  card.style.marginLeft = 'auto';

  const stateImage = document.createElement('img');
  stateImage.classList.add('state');
  stateImage.src = `US States/${state}.png`;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = `${state}`;

  const badge = document.createElement('span');
  badge.classList.add('badge', 'bg-secondary');
  badge.textContent = 'State';

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = `${stateFacts[index]}`;
  
  cardTitle.appendChild(badge);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(stateImage);
  card.appendChild(cardBody);

  newFacts.appendChild(card);
}
}

async function deleteAll() {
  try {
    const resp = await fetch('/api/favs', {
      method: 'DELETE',
    });
    if (!resp.ok) {
      throw new Error('Failed to fetch favorites from the backend');
    }
  }catch (error) {
    console.error("You failed in your quest. Error: ", error);
  }

  location.reload();
}

document.getElementById("fetchEventsBtn").addEventListener("click", fetchEvents);

function fetchEvents() {
  const apiKey = "YOUR_SEATGEEK_API_KEY";
  const apiUrl = "https://api.seatgeek.com/2/events";

  fetch(`${apiUrl}?client_id=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => displayEvents(data.events))
    .catch(error => console.error('Error fetching or displaying events:', error));
}

function displayEvents(events) {
  const eventsContainer = document.getElementById("eventsContainer");

  // Clear previous events
  eventsContainer.innerHTML = "";

  // Display each event
  events.forEach(event => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");

    const eventName = document.createElement("h4");
    eventName.textContent = event.title;

    const eventDate = document.createElement("p");
    eventDate.textContent = `Date: ${new Date(event.datetime_local).toLocaleString()}`;

    const eventVenue = document.createElement("p");
    eventVenue.textContent = `Venue: ${event.venue.name}`;

    eventElement.appendChild(eventName);
    eventElement.appendChild(eventDate);
    eventElement.appendChild(eventVenue);

    eventsContainer.appendChild(eventElement);
  });
}

function addIndex() {
  setFavArray();
}