class AddFav {
  constructor() {
    const userNameEl = document.querySelector('.user-name');
    userNameEl.textContent = this.getUserName();
  }

  getUserName() {
    return 'New User'; // We're not using localStorage for username anymore
  }
}

const game = new AddFav();

document.addEventListener('DOMContentLoaded', () => {
  populateCards();
});

async function populateCards() {
  try {
    const response = await fetch('/api/favs');
    if (!response.ok) {
      throw new Error('Failed to fetch favorites from the backend');
    }
    const favorites = await response.json();
    renderCards(favorites);
  } catch (error) {
    console.error('Failed to populate cards:', error);
  }
}

function renderCards(favorites) {
  const newFacts = document.querySelector('#dbinfo');
  newFacts.innerHTML = ''; // Clear existing cards

  favorites.forEach((favorite) => {
    const { state, fact } = favorite;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '300px';
    card.style.marginLeft = 'auto';

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

    card.appendChild(cardBody);

    newFacts.appendChild(card);
  });
}

async function deleteAll() {
  try {
    const resp = await fetch('/api/favs', {
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