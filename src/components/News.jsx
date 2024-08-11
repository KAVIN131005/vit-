import React from 'react';
import './News.css'
import Header from './Header';

function News() {
  const newsChannels = [
    { name: 'Channel 1', headline: 'Floods hit the northern region', link: '#', timestamp: '2024-08-11 09:30 AM' },
    { name: 'Channel 2', headline: 'Wildfires continue to spread in the west', link: '#', timestamp: '2024-08-11 10:15 AM' },
    { name: 'Channel 3', headline: 'Earthquake aftermath: Rescue operations underway', link: '#', timestamp: '2024-08-11 11:00 AM' },
  ];

  return (
    <>
    <Header/>
    <div className="news-page">
      <header className="header">
        <h1>Disaster News</h1>
      </header>
      <div className="news-list">
        {newsChannels.map((news, index) => (
          <div key={index} className="news-item">
            <h2>{news.name}</h2>
            <p className="headline">{news.headline}</p>
            <p className="timestamp">{news.timestamp}</p>
            <a href={news.link} className="read-more">Read more</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default News;
