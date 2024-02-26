  let states = [
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
  
  class Game {
    buttons;
    allowPlayer;
    sequence;
    playerPlaybackPos;
    mistakeSound;
  
    constructor() {

        const playerNameEl = document.querySelector('.player-name');
            playerNameEl.textContent = this.getPlayerName();
        }
    
        getPlayerName() {
            return localStorage.getItem('userName') ?? 'New User';
        }
  }
  
  const game = new Game();

  
  // Simulate chat messages that will come over WebSocket
  setInterval(() => {
    const score = Math.floor(Math.random() * 49);
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="note"><span class="user-event">Amy</span> added ${states[score]}</div>` +
      chatText.innerHTML;
  }, 5000);
  

  /* This function is going to take in a parameter given when you click on a specific box.
  Normally this would call data from the database but for js we're hardcoding information 
  Then we're going to create a card using that information (the name will be found using the index
    on the states array and the info same idea on the info array)
    Then we just plug those strings in as information for the card.*/

  function stateInfo (index) {
    const state = states[index];
    const newFacts = document.querySelector('#new-facts');
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '300px';

    const stateImage = document.createElement('img');
    stateImage.classList.add('state');
    stateImage.src = 'US States/${state}.png';

    newFacts.innerHTML =
    '<div class="card" style="width:300px">' +
            '<img class="state" src="US States/AL.png" />'+
            '<div class="card-body">' +
              '<h5 class="card-title"> ${state} <span class="badge bg-secondary">State</span></h5>'+
              '<p class="card-text">Alabama is considered part of the South</p>'+
            '</div>'+
          '</div>'
      `<card class="card"><span class="user-event">Amy</span> added ${states[score]}</div>` +
      newFacts.innerHTML;
  }


  /* For the favorites, I can keep track of what the index is
  and then if they click the favorites button I can add it to a 
  set of indexes. Then that set will populate information when we 
  go to the favorites page. How will I pass the set through though?*/