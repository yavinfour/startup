import React from 'react';
import './plan.css';

export default function Plan () {
    socket;
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
  const noFavs = 'deletedFavs';

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
  localStorage.setItem("stateFact", JSON.stringify((stateFacts)));



    return(
        <main>
      <p></p>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(0)"><img height="100px" src="US States/Alabama.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(1)"><img height="100px" src="US States/Alaska.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(2)"><img height="100px" src="US States/Arizona.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(3)"><img height="100px" src="US States/Arkansas.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(4)"><img height="100px" src="US States/California.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(5)"><img height="100px" src="US States/Colorado.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(6)"><img height="100px" src="US States/Connecticut.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(7)"><img height="100px" src="US States/Deleware.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(8)"><img height="100px" src="US States/Florida.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(9)"><img height="100px" src="US States/Georgia.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(10)"><img height="100px" src="US States/Hawaii.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(11)"><img height="100px" src="US States/Idaho.png" alt="random" /></div>
      </button>
      <p></p>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(12)"><img height="100px" src="US States/Illinois.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(13)"><img height="100px" src="US States/Indiana.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(14)"><img height="100px" src="US States/Iowa.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(15)"><img height="100px" src="US States/Kansas.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(16)"><img height="100px" src="US States/Kentucky.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(17)"><img height="100px" src="US States/Louisiana.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(18)"><img height="100px" src="US States/Maine.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(19)"><img height="100px" src="US States/Maryland.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(20)"><img height="100px" src="US States/Massachusets.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(21)"><img height="100px" src="US States/Michigan.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(22)"><img height="100px" src="US States/Minnesota.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(23)"><img height="100px" src="US States/Missouri.png" alt="random" /></div>
      </button>
      <p></p>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(24)"><img height="100px" src="US States/Mississippi.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(25)"><img height="100px" src="US States/Montana.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(26)"><img height="100px" src="US States/Nebraska.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(27)"><img height="100px" src="US States/Nevada.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(28)"><img height="100px" src="US States/New Hampshire.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(29)"><img height="100px" src="US States/New Jersey.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(30)"><img height="100px" src="US States/New Mexico.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(31)"><img height="100px" src="US States/New York.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(32)"><img height="100px" src="US States/North Carolina.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(33)"><img height="100px" src="US States/North Dakota.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(34)"><img height="100px" src="US States/Ohio.png" alt="random" /></div>
      </button>
      <p></p>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(35)"><img height="100px" src="US States/Oklahoma.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(36)"><img height="100px" src="US States/Oregon.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(37)"><img height="100px" src="US States/Pennsylvania.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(38)"><img height="100px" src="US States/Rhode Island.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(39)"><img height="100px" src="US States/South Carolina.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(40)"><img height="100px" src="US States/South Dakota.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(41)"><img height="100px" src="US States/Tennessee.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(42)"><img height="100px" src="US States/Texas.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(43)"><img height="100px" src="US States/Utah.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(44)"><img height="100px" src="US States/Vermont.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(45)"><img height="100px" src="US States/Virginia.png" alt="random" /></div>
      </button>
      <p></p>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(46)"><img height="100px" src="US States/Washington.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(47)"><img height="100px" src="US States/West Virginia.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(48)"><img height="100px" src="US States/Wisconsin.png" alt="random" /></div>
      </button>
      <button>
        <div id="picture" className="picture-box" onclick="stateInfo(49)"><img height="100px" src="US States/Wyoming.png" alt="random" /></div>
      </button>
    <hr/>
    <div className="favoritize">
      <p>Add selected location to favorites?</p>
      <button>
        <svg aria-hidden="true" viewBox="0 0 50 50" height="45" width="45" onclick="addIndex()">
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
        <div align="right" width="150px" id="card" className="demo-box">
        </div>
      </div>
      <hr/>
      
      <div className="apiEvents"> 
        <h3>Find events here!</h3>
        <body>
          <label for="searchQuery">Event Keyword:</label>
          <input type="text" id="searchQuery" name="searchQuery"></input>
        
          <button id="searchBtn">Search</button>
        
          <div id="eventsContainer"></div>
        </body>
      </div>

    </main>
    );
}