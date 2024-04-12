import React from 'react';
import './favs.css';

export default function Favs () {
    const [favs, setFavs] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/favs')
          .then((response) => response.json())
          .then((favs) => {
            setFavs(favs);
            localStorage.setItem('favs', JSON.stringify(favs));
          })
          .catch(() => {
            const favsText = localStorage.getItem('favs');
            if (scoresText) {
              setFavs(JSON.parse(favsText));
            }
          });
      }, []);

      const favRows = [];
        if (favs.length) {
        for (const [i, fav] of favs.entries()) {
            favRows.push(
            <tr key={i}>
                <td>{i}</td>
                <td>{fav.name.split('@')[0]}</td>
                <td>{fav.score}</td>
                <td>{fav.date}</td>
            </tr>
            );
        }
        } else {
        favRows.push(
            <tr key='0'>
            <td colSpan='4'>Add some favorites!</td>
            </tr>
        );
        }

    function getUserName() {
        return localStorage.getItem('userName') ?? 'Mystery user';
      }
      
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
    return (
        <main>
            <h1>Favorites</h1>
            <button>
                <div className="delete" onclick="deleteAll()">
                    <p>Clear Favorites</p>
                </div>
            </button>
            <p>See all of your future travel goals!</p>
            <p></p>
            <div id="dbinfo" className="new-cards"></div>
        </main>
    );
}