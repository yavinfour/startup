import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './plan.css';

const Plan = () => {
  const [pokedex, setPokedex] = useState(0);
  const addedFav = 'addedFav';
  const [favorites, setFavorites] = useState([]);
  const [events, setEvents] = useState([]);


  const allStates = [
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

  const stateFacts = [
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
    "South Dakota probably actually has Mount Rushmore", "Tennessee has the Smokies. The mountains, not the hotdogs", "Texas has better brisket than South Carolina", 
    "Utah has a bunch of seagulls :)", "Vermont looks like an upside down New Hampshire", "Virginia is covered in beautiful green forests", "Washington  has the same vibes as England", 
    "West Virginia looks like a frog", "Wisconsin is famous for it's cheese, their chocolate cheese is really good", "Wyoming is a cowboy state"
  ];

  localStorage.setItem("pokedex", pokedex);
  localStorage.setItem("states", JSON.stringify((allStates)));
  localStorage.setItem("stateFact", JSON.stringify((stateFacts)));

  const addIndex = () => {
    setFavArray();
  }


      function getUserName() {
          return localStorage.getItem('userName') ?? 'Mystery user';
      }

      const configureWebSocket = () => {
          const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
          this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
          window.socket = this.socket;
          this.socket.onopen = (event) => {
          this.displayMsg('system', 'plan', 'connected');
          console.log("ws connected");
          };
          this.socket.onclose = (event) => {
          console.log("ws closed");
          this.displayMsg('system', 'plan', 'disconnected');
          };
          this.socket.onmessage = async (event) => {
          const msg = JSON.parse(await event.data.text()); //throwing the json error
          console.log(msg);
          if (msg.type === addedFav && msg.from !== getUserName()) {
              this.displayMsg('user', msg.from, `added ${allStates[msg.value]}`);
          }// else if (msg.type === GameStartEvent) {
          //   this.displayMsg('user', msg.from, `started a new game`);
          // }
          };
      };

      //this needs to work before rest of code works
      const displayMsg = (cls, from, msg) => {
          const chatText = document.querySelector('#user-messages');
          chatText.innerHTML =
          `<div className="event"><span className="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
      };

      const broadcastEvent = (from, type, value) => {
      const event = {
          from: from,
          type: type,
          value: value,
      };
      window.socket.send(JSON.stringify(event));
      }

      // function getUserName() {
      // return localStorage.getItem('userName') ?? 'Mystery user';
      // }

      const setFavArray = async () => {
      const newFav = pokedex; // Assuming pokedex contains the new favorite
      const userName = getUserName();
      try {
          //Fetch existing favorites from the backend
          const resp = await fetch(`/api/favs?userEmail=${encodeURIComponent(userName)}`, {
          method: 'GET',
          });
          console.log("try get");
          if (!resp.ok) {
          console.log("failure");
          throw new Error('Failed to fetch favorites from the backend');
          }

          const existingFavsResponse = await resp.json();
          console.log(`existing favs: ${existingFavsResponse.allFavs}`);
          let existingFavs = existingFavsResponse[0] || [];
          const favExists = existingFavs.some(fav => fav === newFav);
          if (!favExists) {
          // If the new favorite doesn't exist, push it onto the existing favorites array
          existingFavs.push(newFav);
          }

          const repVal = { userEmail: userName, allFavs: existingFavs };

          //Send the updated favorites array to the backend to save
          console.log("before fetch");
          const response = await fetch('/api/fav', {
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify(repVal),
          });


          console.log("fetched");

          if (!response.ok) {
          throw new Error('Failed to add favorite to the backend');
          }

          console.log('favArray:', existingFavs);
          alert(`${allStates[pokedex]} was added as a favorite`);
          broadcastEvent(userName, addedFav, pokedex);

      } catch (error) {
          console.error("You failed in your quest. Error: ", error);
      }
      };

      const stateInfo = (index) => {

      setPokedex(index);

      // Use JSX to create the card element
      const state = allStates[index];
      const card = (
        <div className="card">
          <img className="state" src={`../src/US_Flowers/${state}.png`} alt={state} />
          <div className="card-body">
            <h4 className="card-title">
              <span className="badge bg-secondary">State</span>
              {state}
            </h4>
            <p className="card-text">{stateFacts[index]}</p>
          </div>
        </div>
      );

      // Render the card element
      ReactDOM.render(card, document.getElementById('dbinfo'));
      };


      const fetchEvents = async (searchQuery) => {
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
          if (!data.events || data.events.length === 0) {
            throw new Error('No events found in API response');
          }
      
          setEvents(data.events);
        } catch (error) {
          console.error('Error fetching events:', error.message);
          // You can handle the error here, such as displaying a message to the user
        }
      };
    
      useEffect(() => {
        // Fetch events when component mounts
        fetchEvents("concerts");
      }, []);
    
      const displayEvents = (eventsData) => {
        setEvents(eventsData);
      };
    
      const addIndexToFavorites = () => {
        setFavorites([...favorites, pokedex]);
      };


  return(
    <main>

      <div className="notify"> 

      <h1>Choose a location</h1> 
      <div className="box">
        <input type="checkbox" id="click"></input>
        <label htmlFor="click" className="click-me">NOTIFICATIONS</label>
        <div className="content" id="user-messages">         
          
        </div>
      </div>     
      </div>

      <div className="staters">
      {/* Render buttons for each state */}
      {allStates.map((state, index) => (
              <button key={index} onClick={() => stateInfo(index)}>
                <div className="picture-box">
                  <img height="100px" src={`../src/US_States/${state}.png`} alt={state} />
                </div>
              </button>
            ))}
      </div>

      <div className="favoritize">
        <p>Add selected location to favorites?</p>
        <button>
          <svg aria-hidden="true" viewBox="0 0 50 50" height="45" width="45" onClick={addIndex}>
            <path d="M 5,15
              A 10,10 0,0,1 25,15
              A 10,10 0,0,1 45,15
              Q 45,30 25,45
              Q 5,30 5,15 z" stroke="indianred" fill="crimson" />
          </svg>
          <p>Add To Favorites</p>
        </button>
      </div>

        <div id="dbinfo" className="new-cards">      
          <div align="right" width="150px" id="card" className="demo-box"></div>
        </div>
        <hr/>

        <div className="apiEvents">
          <h3>Find events here!</h3>
          {/* Render event search input and button */}
          <input type="text" id="searchQuery" name="searchQuery" />
          <button onClick={() => fetchEvents(document.getElementById("searchQuery").value)}>
            Search
          </button>

          {/* Render fetched events */}
          <div id="eventsContainer">
            {events.map((event, index) => (
              <div key={index} className="event">
                <h4>{event.title}</h4>
                <p>Date: {new Date(event.datetime_local).toLocaleString()}</p>
                <p>Venue: {event.venue.name}</p>
                <a href={event.url} target="_blank" rel="noopener noreferrer">Get Tickets</a>
              </div>
            ))}
          </div>
        </div>
        <button id="searchBtn">Search</button>
        <div id="eventsContainer"></div>
    </main>
  );
};

export default Plan;