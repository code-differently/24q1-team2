import React from 'react';

import './LandingPage.scss';

export const LandingPage: React.FC = () => {
    return (
        <>
            <div className="hero flex-row">
            <div className="left-box flex-column flex-auto">
                <div className="title flex-column">
                <span>Local Pulse</span>
                <span>Local Pulse</span>
                </div>
            </div>
            <div className="right-box flex-center flex-auto">
                <div className="search-box flex-row">
                <input className="search-input" name="search" type="text" placeholder="What are you looking for?" />
                <button className="search-btn">
                    <svg viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>
                </button>
                </div>
            </div>
            </div>
            <div className="main flex-row">
            <div className="mission-statement flex-column flex-auto">
                <h2>Our Mission</h2>
                <p>Our mission is to connect individuals with their local communities, fostering a sense of belonging, cultural appreciation, and social interaction. Through our platform, users can discover and engage in a diverse array of local events, support community organizations and initiatives, and promote active participation and cultural exchange. By facilitating connections and encouraging community engagement, we aim to strengthen the fabric of neighborhoods, enhance social cohesion, and contribute to the vibrancy and well-being of communities everywhere.</p>
            </div>
            </div>
        </>
    );
};