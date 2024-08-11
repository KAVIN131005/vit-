import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header-overall'>
      <div className='sticky'>
        <div className='header-container'>
          <div className='hea-first'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h3>RescueNet</h3>
            </Link>
          </div>

          <div className='header-links'>
            <Link to='/weather' className='header-link'>
              Weather
            </Link>
            <Link to='/donate' className='header-link'>
              Donate
            </Link>
            <Link to='/current' className='header-link'>
              Current Situation
            </Link>
            <Link to='/news' className='header-link'>
              News
            </Link>
            <Link to='/feedback' className='header-link'>
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
