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
  