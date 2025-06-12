import React from "react";
import "./styles/Home.css";
import cityBanner from "./images/citybanner2.jpg";
import isocLogo from "./images/Isoclogo2.png";

const App: React.FC = () => {
  return (
    <div className="hero">
      <header className="navbar">
        <div className="branding">
          <img src={isocLogo} className="logo" alt="CityBanner" />
          <h1>City St George's ISoc</h1>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#committee">Committee</a>
        </nav>
      </header>
      <img src={cityBanner} className="imagebanner" alt="CityBanner" />
      <section className="banner">
        <h2>Welcome to our ISoc</h2>
        <p>Faith. Brotherhood. Community.</p>
        <a href="#about" className="btn">
          Learn More
        </a>
      </section>

      <section id="about" className="section">
        <h3>About Us</h3>
        <p>
          We are the Islamic Society at City St George's. Our goal is to foster
          a welcoming environment for all students and promote Islamic values on
          campus.
        </p>
      </section>

      <section id="events" className="section">
        <h3>Upcoming Events</h3>
        <ul>
          <li>🕌 Friday Prayer – Every Friday 1:15 PM</li>
          <li>🤝 Meet & Greet – Sept 15th</li>
          <li>🍽 Charity Dinner – Oct 3rd</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h3>Contact Us</h3>
        <p>Email: isoc@youruniversity.edu</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} City St George's ISoc
      </footer>
    </div>
  );
};

export default App;
