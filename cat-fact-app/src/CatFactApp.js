// App.js or CatFactApp.js
import React, { useState } from 'react';

const CatFactApp = () => {
  const [fact, setFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact); // Set the fact from response
    } catch (error) {
      console.error('Error fetching cat fact:', error);
      setFact('Oops! Something went wrong.');
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h2>🐱 Random Cat Fact</h2>
      <button 
        onClick={fetchCatFact} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Get Cat Fact
      </button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{fact}</p>
    </div>
  );
};

export default CatFactApp;
