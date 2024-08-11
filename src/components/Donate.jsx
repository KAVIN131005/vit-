// src/DonatePage.js

import React, { useState } from 'react';
import Header from './Header';

const Donate = () => {
  const [donationType, setDonationType] = useState('');
  const [zone, setZone] = useState('');
  const [amount, setAmount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [groceryItem, setGroceryItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let link = '';
    if (donationType === 'Amount') {
      link = 'https://www.india.gov.in/website-chief-ministers-relief-fund-tamil-nadu';
    } else if (donationType === 'Food' || donationType === 'Clothes' || donationType === 'Materials') {
      link = 'https://ngodarpan.gov.in/';
    } else if (donationType === 'Groceries') {
      link = 'https://ngodarpan.gov.in/';
    }
    
    alert(
      `Donation Submitted!\nType: ${donationType}\nZone: ${zone}\nAmount/Quantity: ${amount || quantity || groceryItem}`
    );

    // Reset fields
    setDonationType('');
    setZone('');
    setAmount('');
    setQuantity('');
    setGroceryItem('');

    // Redirect to the appropriate link
    window.location.href = link;
  };

  return (
    <div>
      <Header />
    
      <div style={styles.container}>
        <h1 style={styles.heading}>Donate for Disaster Management</h1>
        
        <section style={styles.intro}>
          <p>
            Your contributions can make a significant impact in disaster-stricken areas. 
            By donating, you help provide essential resources and support to those in need.
            Choose the type of donation and the zone you wish to contribute to.
          </p>
        </section>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Select Donation Type:
            <select
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
              style={styles.select}
            >
              <option value="">Select</option>
              <option value="Amount">Amount</option>
              <option value="Food">Food</option>
              <option value="Clothes">Clothes</option>
              <option value="Materials">Materials</option>
              <option value="Groceries">Groceries</option>
            </select>
          </label>

          <label style={styles.label}>
            Select Zone:
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              style={styles.select}
            >
              <option value="">Select</option>
              <option value="Red Zone">Red Zone</option>
              <option value="Yellow Zone">Yellow Zone</option>
              <option value="Green Zone">Green Zone</option>
            </select>
          </label>

          {donationType === 'Amount' && (
            <label style={styles.label}>
              Enter Amount:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
                placeholder="Enter amount"
              />
            </label>
          )}

          {donationType === 'Groceries' && (
            <label style={styles.label}>
              Select Grocery Item:
              <select
                value={groceryItem}
                onChange={(e) => setGroceryItem(e.target.value)}
                style={styles.select}
              >
                <option value="">Select</option>
                <option value="Rice">Rice</option>
                <option value="Lentils">Lentils</option>
                <option value="Cooking Oil">Cooking Oil</option>
                <option value="Sugar">Sugar</option>
                <option value="Salt">Salt</option>
              </select>
            </label>
          )}

          {donationType !== 'Amount' && donationType !== 'Groceries' && (
            <label style={styles.label}>
              Enter Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={styles.input}
                placeholder="Enter quantity"
              />
            </label>
          )}

          <button type="submit" style={styles.button}>
            Submit Donation
          </button>
        </form>

        <section style={styles.impact}>
          <h2 style={styles.impactHeading}>Recent Donation Impacts</h2>
          <ul style={styles.impactList}>
            <li>Provided 500 food packages to Red Zone areas.</li>
            <li>Distributed 1,000 clothing items in Yellow Zone areas.</li>
            <li>Supported the rebuilding of community centers in Green Zone areas.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    animation: 'fadeIn 1s ease-in',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
  },
  intro: {
    marginBottom: '30px',
    fontSize: '16px',
    color: '#555',
    animation: 'slideIn 1s ease-out',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
    animation: 'slideUp 1s ease-out',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    fontSize: '16px',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
  impact: {
    marginTop: '30px',
    textAlign: 'left',
    animation: 'fadeIn 1s ease-in',
  },
  impactHeading: {
    color: '#333',
    marginBottom: '15px',
  },
  impactList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  impactItem: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
  },
};

export default Donate;
