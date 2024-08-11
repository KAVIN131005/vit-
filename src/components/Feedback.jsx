import React, { useState } from 'react';
import './Feedback.css'
import Header from './Header';

function Feedback() {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', feedback);
    // Add code to handle form submission, like sending data to a server
  };

  return (
    <>
    <Header/>
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={feedback.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={feedback.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <a href = "mailto:727723tecs102@skcet.ac.in"><button type="submit" className="submit-button">Submit Feedback</button></a>
      </form>
    </div></>
  );
}

export default Feedback;
