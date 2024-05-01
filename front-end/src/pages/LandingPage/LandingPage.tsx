import './LandingPage.scss';
import React from 'react';
import searchSvg from './assets/search.svg';
import { useSubmit } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const handleSubmit = useSubmit();
  return (
    <>
      <div className="hero flex-row">
        <div className="left-box flex-column flex-auto">
          <div className="title flex-column">
            <span>Local Pulse</span>
            <span>Local Pulse</span>
          </div>
        </div>
        <form className="right-box flex-center flex-auto" onSubmit={(evt) => handleSubmit(evt.currentTarget, { method: "get", action: "/search" })}>
          <div className="search-box flex-row">
              <input
                className="search-input"
                name="q"
                type="text"
                placeholder="What are you looking for?"
              />
              <button className="search-btn">
                <img src={searchSvg} alt='Search' />
              </button>
          </div>
        </form>
      </div>
      <div className="main flex-row">
        <div className="mission-statement flex-column flex-auto">
          <h2>Our Mission</h2>
          <p>
            Our mission is to connect individuals with their local communities,
            fostering a sense of belonging, cultural appreciation, and social
            interaction. Through our platform, users can discover and engage in
            a diverse array of local events, support community organizations and
            initiatives, and promote active participation and cultural exchange.
            By facilitating connections and encouraging community engagement, we
            aim to strengthen the fabric of neighborhoods, enhance social
            cohesion, and contribute to the vibrancy and well-being of
            communities everywhere.
          </p>
        </div>
      </div>
    </>
  );
};
