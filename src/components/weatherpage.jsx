import React from 'react'
import Header from './Header'
import './Weatherpage.css'

function Weatherpage() {
  const dangerZones = ['Area 1', 'Area 2', 'Area 3']; // Example danger zones
  const disasterAreas = ['Area A', 'Area B', 'Area C']; // Example disaster-affected areas

  return (
    <>
    <div><Header/></div>
    <div className="weather-page">
      <header className="header">
        <h1>Weather & Disaster Information</h1>
      </header>
      <div className="content">
        <section className="section danger-zones">
          <h2>Danger Zones</h2>
          <ul>
            {dangerZones.map((zone, index) => (
              <li key={index}>{zone}</li>
            ))}
          </ul>
        </section>
        <section className="section disaster-areas">
          <h2>Disaster-Affected Areas</h2>
          <ul>
            {disasterAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
    </>
    
  )
}

export default Weatherpage