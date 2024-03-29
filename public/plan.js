  let allStates = [
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
  ];

  allPeople = [
    "Stacie", "Martin", "Jade", "Charlie", "Nancy",
    "Louis", "Rylee", "Will", "Brooke", "Kaden", 
    "Gina", "Derek", "Penny", "Tony", "Allie"
  ];

  stateFacts = [
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
  ];

  let pokedex = 0;
  const addedFav = 'addedFav';

  // const setFavArray = () => {
  // favArray.add(pokedex);
  // console.log(pokedex);
  // console.log('favArray:', Array.from(favArray));
  // localStorage.setItem("favorites", JSON.stringify([...favArray]));
  // alert(`${allStates[pokedex]} was added as a favorite`)
  // }

  const setPokedex = (index) => {
    pokedex = index;
    localStorage.setItem("pokedex", pokedex);
  };

  
  localStorage.setItem("pokedex", pokedex);
  localStorage.setItem("states", JSON.stringify((allStates)));
  localStorage.setItem("people", allPeople);
  localStorage.setItem("stateFact", JSON.stringify((stateFacts)));

  // window.location.href = "favs.html";

class Plan {

  socket;

  constructor() {

    const userNameEl = document.querySelector('.user-name');
    userNameEl.textContent = this.getUserName();

    this.configureWebSocket();
  }

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    window.socket = this.socket;
    this.socket.onopen = (event) => {
      //this.displayMsg('system', 'plan', 'connected');
      console.log("ws connected");
    };
    this.socket.onclose = (event) => {
      console.log("ws closed");
      //this.displayMsg('system', 'plan', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text()); //throwing the json error
      console.log(msg);
      // if (msg.type === addedFav) {
      //   this.displayMsg('user', msg.from, `added ${allStates[msg.value.fav]}`);
      // }// else if (msg.type === GameStartEvent) {
      //   this.displayMsg('user', msg.from, `started a new game`);
      // }
    };
  }

  //this needs to work before rest of code works
  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

  getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }
}

const planner = new Plan();

  function stateInfo(index) {

    pokedex = index;

    const state = allStates[index];
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
    cardText.textContent = `${stateFacts[index]}`;
    
    cardTitle.appendChild(badge);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(stateImage);
    card.appendChild(cardBody);

    newFacts.insertBefore(card, newFacts.firstChild);
    pokedex = index;
  }

  async function setFavArray() {
    const newFav = pokedex; // Assuming pokedex contains the new favorite
    try {
      // Fetch existing favorites from the backend
      const resp = await fetch('/api/favs', {
        method: 'GET',
      });
      console.log("try get");
      if (!resp.ok) {
        console.log("failure");
        throw new Error('Failed to fetch favorites from the backend');
      }
  
      const existingFavs = await resp.json();
      console.log('existingFavs: ', existingFavs);
  
      // Construct the new array of favorites
      let favArray = Array.isArray(existingFavs) ? [...existingFavs] : [];
      favArray.push(newFav);
  
      // Send the updated favorites array to the backend to save
      const response = await fetch('/api/fav', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(favArray),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add favorite to the backend');
      }
  
      console.log('favArray:', favArray);
      alert(`${allStates[pokedex]} was added as a favorite`);
  
    } catch (error) {
      console.error("You failed in your quest. Error: ", error);
    }
  }
  
  function addIndex() {
    setFavArray();
  }


document.getElementById("searchBtn").addEventListener("click", function() {
  const searchQuery = document.getElementById("searchQuery").value;

  fetchEvents(searchQuery);
});

async function fetchEvents(searchQuery) {
  try {
    const apiKey = "NDAzODMyNTB8MTcxMDM2Njg1MS41MTI5NTY5";
    const apiUrl = "https://api.seatgeek.com/2/events";

    // Construct the query string with the search query parameter
    const queryString = `?client_id=${apiKey}&q=${searchQuery}`;

    const response = await fetch(`${apiUrl}${queryString}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    if (!data.events) {
      throw new Error('No events found in API response');
    }
    
    displayEvents(data.events);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

function displayEvents(events) {
  const eventsContainer = document.getElementById("eventsContainer");

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

    const ticketUrl = document.createElement("a");
    ticketUrl.textContent = "Get Tickets";
    ticketUrl.href = event.url;
    ticketUrl.target = "_blank";
    ticketUrl.rel = "noopener noreferrer"; // Security thingy

    eventElement.appendChild(eventName);
    eventElement.appendChild(eventDate);
    eventElement.appendChild(eventVenue);
    eventElement.appendChild(ticketUrl);

    eventsContainer.appendChild(eventElement);
  });
}


/* For the favorites, I can keep track of what the index is
and then if they click the favorites button I can add it to a 
set of indexes. Then that set will populate information when we 
go to the favorites page. How will I pass the set through though?*/
