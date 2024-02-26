  
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
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="note"><span class="player-event">Eich</span> scored ${score}</div>` +
      chatText.innerHTML;
  }, 5000);
  