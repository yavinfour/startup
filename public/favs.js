class AddFav {
  constructor() {
    const userNameEl = document.querySelector('.user-name');
    userNameEl.textContent = this.getUserName();
  }

  getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery user';
  }
}

function getUserName() {
  return localStorage.getItem('userName') ?? 'Mystery user';
}

const game = new AddFav();

document.addEventListener('DOMContentLoaded', () => {
  populateCards();
});

async function populateCards() {
  const userName = this.getUserName();
    const response = await fetch(`/api/favs?userEmail=${encodeURIComponent(userName)}`, {
      method: 'GET',
    });
    console.log("tried fetch");
    const getFavs = await response.json();
    const favorites = getFavs[0];
    console.log(favorites);
    renderCards(favorites);
}

function renderCards(favorites) {
  const newFacts = document.querySelector('#dbinfo');
  newFacts.innerHTML = ''; // Clear existing cards

  favorites.forEach((favorite) => {
    const allStates = JSON.parse(localStorage.getItem("states"));
    const stateFact = JSON.parse(localStorage.getItem("stateFact"));
    const state = allStates[favorite];
    const fact = stateFact[favorite];

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '300px';
    card.style.marginLeft = 'auto';

    const stateImage = document.createElement('img');
    stateImage.classList.add('state');
    stateImage.src = `US Flowers/${state}.png`;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = state;

    const badge = document.createElement('span');
    badge.classList.add('badge', 'bg-secondary');
    badge.textContent = 'State';

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = fact;

    cardTitle.appendChild(badge);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(stateImage);
    card.appendChild(cardBody);

    newFacts.appendChild(card);
  });
}

async function deleteAll() {
  const userEmail = getUserName();
  console.log("try delete");
  try {
    const resp = await fetch(`/api/favs/${userEmail}`, {
      method: 'DELETE',
    });
    if (!resp.ok) {
      throw new Error('Failed to delete favorites from the backend');
    }
    location.reload(); // Reload the page after deletion
  } catch (error) {
    console.error('Failed to delete favorites:', error);
  }
}

function addIndex() {
  // Implement adding favorites functionality if needed
}