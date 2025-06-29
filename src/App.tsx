import React from "react";
import "./styles/Home.css";
import cityBanner from "./images/citybanner2darkened.jpg";
import isocLogo from "./images/Isoclogo2.png";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="homecontainer">
        <img src={cityBanner} className="imagebanner" alt="CityBanner" />
        <div className="overlay-text">
          <h2>As-salamu alaykum! Welcome to the City's ISoc website!</h2>
        </div>
      </div>

      <section className="banner">
        <h2>Welcome to our ISoc</h2>
        <p>Faith. Brotherhood. Community.</p>
        <a href="#about" className="btn">
          Learn More
        </a>
      </section>

      <div className="sectioncitylogomain">
        <section id="about" className="sectiontextcitylogomain">
          <h3>About Us</h3>
          <p>
            We are the Islamic Society at City St George's. Our goal is to
            foster a welcoming environment for all students and promote Islamic
            values on campus.
          </p>
        </section>

        <div className="citylogomain">
          <img src={isocLogo} alt="CityBanner" />
        </div>
      </div>
      <section id="events" className="section">
        <h3>Upcoming Events</h3>
        <ul>
          <p>🕌 Friday Prayer – Every Friday 1:15 PM</p>
          <p>🎁 Palestine Charity Event – Sept 15th</p>
          <p>🤝 Brothers Circle – Oct 3rd</p>
        </ul>
        <a href="#Events" className="btn">
          Events Page
        </a>
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
