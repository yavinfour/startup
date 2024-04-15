import React, { useEffect, useState } from 'react';
import './favs.css';

const Favs = () => {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
      populateCards();
    }, []);



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
          setFavs(favorites);
          renderCards(favs);
      }
      
      const renderCards = (favs) => {
        const allStates = JSON.parse(localStorage.getItem("states"));
        const stateFact = JSON.parse(localStorage.getItem("stateFact"));

        if (!favs || !Array.isArray(favs) || favs.length === 0) {
          return <p>Add some favorites!</p>;
        }
    
        return favs.map((fav, index) => {
            const state = allStates[fav];
            const fact = stateFact[fav];
    
            return (
                <div className="card" key={index}>
                    <img className="state" src={`US_Flowers/${state}.png`} alt={state} />
                    <div className="card-body">
                        <h4 className="card-title">
                            <span className="badge bg-secondary">State</span>
                            {state}
                        </h4>
                        <p className="card-text">{fact}</p>
                    </div>
                </div>
            );
        });
    };
    
      
      const deleteAll = async () => {
        const userEmail = getUserName();
        console.log("try delete");
        try {
          const resp = await fetch(`/api/favs/${userEmail}`, {
            method: 'DELETE',
          });
          if (!resp.ok) {
            throw new Error('Failed to delete favs from the backend');
          }
          location.reload(); // Reload the page after deletion
        } catch (error) {
          console.error('Failed to delete favs:', error);
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
                {renderCards(favs)}
            </div>
        </main>
    );
  };

export default Favs;