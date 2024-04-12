import React, { useEffect, useState } from 'react';
import './favs.css';

const Favs = () => {
    const [favs, setFavs] = React.useState([]);

    useEffect(() => {
      fetchFavorites();
    });

    const fetchFavorites = async () => {
      const userName = getUserName();
      try {
          const response = await fetch(`/api/favs?userEmail=${encodeURIComponent(userName)}`, {
              method: 'GET',
          });
          if (!response.ok) {
              throw new Error('Failed to fetch favorites');
          }
          const favorites = await response.json();
          setFavs(favorites);
      } catch (error) {
          console.error('Error fetching favorites:', error);
      }
    };

      // const favRows = [];
      //   if (favs.length) {
      //   for (const [i, fav] of favs.entries()) {
      //       favRows.push(
      //       <tr key={i}>
      //           <td>{i}</td>
      //           <td>{fav.name.split('@')[0]}</td>
      //           <td>{fav.score}</td>
      //           <td>{fav.date}</td>
      //       </tr>
      //       );
      //   }
      //   } else {
      //   favRows.push(
      //       <tr key='0'>
      //       <td colSpan='4'>Add some favorites!</td>
      //       </tr>
      //   );
      //   }

    function getUserName() {
        return localStorage.getItem('userName') ?? 'Mystery user';
      }
      
      document.addEventListener('DOMContentLoaded', () => {
        populateCards();
      });
      
      const populateCards = async () => {
        const userName = getUserName();
          const response = await fetch(`/api/favs?userEmail=${encodeURIComponent(userName)}`, {
            method: 'GET',
          });
          console.log("tried fetch");
          const getFavs = await response.json();
          const favorites = getFavs[0];
          console.log(favorites);
          renderCards(favorites);
      }
      
      const renderCards = async (favorites) => {
        const newFacts = document.querySelector('#dbinfo');
        newFacts.innerHTML = ''; // Clear existing cards
      
        favorites.forEach((favorite) => {
          const allStates = JSON.parse(localStorage.getItem("states"));
          const stateFact = JSON.parse(localStorage.getItem("stateFact"));
          const state = allStates[favorite];
          const fact = stateFact[favorite];
      
          const card = (
            <div className="card">
              <img className="state" src={`../US_Flowers/${state}.png`} alt={state} />
              <div className="card-body">
                <h4 className="card-title">
                  <span className="badge bg-secondary">State</span>
                  {state}
                </h4>
                <p className="card-text">{stateFacts[index]}</p>
              </div>
            </div>
          );
      });
      
      const deleteAll = async () => {
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
      

    return (
        <main>
            <h1>Favorites</h1>
            <button onClick={deleteAll}>
                <div className="delete">
                    <p>Clear Favorites</p>
                </div>
            </button>
            <div className="new-cards">
                {favs.length > 0 ? (
                    favs.map((favorite, index) => (
                        <div className="card" key={index}>
                            <img className="state" src={`US Flowers/${favorite.state}.png`} alt={favorite.state} />
                            <div className="card-body">
                                <h4 className="card-title">
                                    <span className="badge bg-secondary">State</span> {favorite.state}
                                </h4>
                                <p className="card-text">{favorite.fact}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Add some favorites!</p>
                )}
            </div>
        </main>
    );
};
};

export default Favs;