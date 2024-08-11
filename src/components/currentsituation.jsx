import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Currentsituation.css';

function Currentsituation() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    // Use reqres.in for mock user data
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        // Map the user data to simulate disaster updates
        const formattedData = data.data.map(user => ({
          title: `Alert for ${user.first_name} ${user.last_name}`,
          description: `Disaster update for user ${user.first_name} ${user.last_name}.`,
          timestamp: new Date().toLocaleString()
        }));
        setUpdates(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div><Header/></div>
      <div className="current-situation-page">
        <header className="header">
          <h1>Current Situation</h1>
          <p>Stay updated on the latest disaster management information.</p>
        </header>
        <div className="updates-section">
          {updates.length > 0 ? (
            updates.map((update, index) => (
              <div key={index} className="update-item">
                <h2>{update.title}</h2>
                <p>{update.description}</p>
                <p className="timestamp">{update.timestamp}</p>
              </div>
            ))
          ) : (
            <p>Loading updates...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Currentsituation;
