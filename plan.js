window.states = Object.freeze([
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
  "Colorado", "Connecticut", "Deleware", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
  "Massachusets", "Michigan", "Minnesota", "Missouri", "Mississippi", 
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]);

people = [
  "Stacie", "Martin", "Jade", "Charlie", "Nancy",
  "Louis", "Rylee", "Will", "Brooke", "Kaden", 
  "Gina", "Derek", "Penny", "Tony", "Allie"
];

window.stateFact = Object.freeze([
  "Alabama is considered part of the south", "Alaska is super cold and there are bears", "Arizona is the only place where saguaro cacti grow naturally", 
  "Arkansas is pronounced different than Kansas", "California is a costal state famous for its oranges", 
  "Colorado is a popular ski location", "Connecticut is super tiny", "Deleware has a lot of US history", "Florida contains the first settled city in America", 
  "Georgia is famous for its peaches", "Hawaii is a popular tourist destination with lots of surfing", "Idaho grows a lot of potatoes", 
  "Illinois was home to the saints for a few years before they were kicked out", "Indiana has the famous indie 500 race", "Iowa is a large farm state", 
  "Kansas grows a lot of wheat", "Kentucky fried chicken", "Louisiana home of the Mardi Gras carnival", "Maine has the best lobster sandwiches", 
  "Maryland is where the capital of the US is found", "Massachusets has Boston which is pretty cool", "Michigan has a lot of lakes", "Minnesota is close to Canada", 
  "Missouri is home to the Gateway Arch", "Mississippi is used for counting", "Montana has a childrens play program that travels the world", 
  "Nebraska has the worlds coolest zoo", "Nevada is most famously known for its city Las Vegas", "New Hampshire looks like an upside down Vermont", 
  "New Jersey is buddies with New York", "New Mexico has a hot air balloon festival every year", "New York has one of the most famous parks in America", 
  "North Carolina is home to Kitty Hawk island where the Wright brothers had their first successful flight", "North Dakota maybe has mount Rushmore?", 
  "Ohio state is an enemy of Michigan I think", "Oklahoma looks like a frying pan", "Oregon has the Tillamook cheese factory which is more famous than Wisconsin cheese", 
  "Pennsylvania is home to the Liberty Bell", "Rhode Island is even smaller than Connecticut", "South Carolina has really good pulled pork (better than Texas)", 
  "South Dakota probably actually has Mount Rushmore", "Tennessee has the Smokies", "Texas is a hick state", "Utah has a bunch of seagulls :)", 
  "Vermont looks like an upside down New Hampshire", "Virginia is covered in beautiful green forests", "Washington  has the same vibes as England", 
  "West Virginia looks like a frog", "Wisconsin is famous for it's cheese, their chocolate cheese is really good", "Wyoming is a cowboy state"
]);

window.pokedex = 0;
window.favArray = new Set();

window.setFavArray = () => {
favArray.add(pokedex);
console.log(pokedex);
console.log('favArray:', Array.from(favArray));
alert(`${states[pokedex]} was added as a favorite`)
}

window.resetFavArray = () => {
favArray = new Set();
}

class Plan {

  constructor() {

    const userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'New User';
    }
}

const planner = new Plan();

// Simulate chat messages that will come over WebSocket
setInterval(() => {
  const person = Math.floor(Math.random() * 14);
  const score = Math.floor(Math.random() * 49);
  const chatText = document.querySelector('#user-messages');
  chatText.innerHTML =
    `<div class="note"><span class="user-event">${people[person]}</span> added ${states[score]}</div>` +
    chatText.innerHTML;
}, 5000);


/* This function is going to take in a parameter given when you click on a specific box.
Normally this would call data from the database but for js we're hardcoding information 
Then we're going to create a card using that information (the name will be found using the index
  on the states array and the info same idea on the info array)
  Then we just plug those strings in as information for the card.*/

function stateInfo(index) {
  const state = states[index];
  const newFacts = document.querySelector('#dbinfo');

  const existingCard = document.querySelector('.card');
  if (existingCard) {
      existingCard.remove();
  }

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

  newFacts.insertBefore(card, newFacts.firstChild);
  pokedex = index;
}

function addIndex() {
  setFavArray();
}


/* For the favorites, I can keep track of what the index is
and then if they click the favorites button I can add it to a 
set of indexes. Then that set will populate information when we 
go to the favorites page. How will I pass the set through though?*/
