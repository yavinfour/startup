
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

function populateCards() {
for (const index of favArray) {
  const state = states[index];
  const newFacts = document.querySelector('#dbinfo');
  
  const existingCards = document.querySelectorAll('.card');
existingCards.forEach(card => card.remove());

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
  cardText.textContent = `${stateFact[index]}`;
  
  cardTitle.appendChild(badge);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(stateImage);
  card.appendChild(cardBody);

  newFacts.appendChild(card);
}
}

function addIndex() {
  setFavArray();
}