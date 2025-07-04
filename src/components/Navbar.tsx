import isocLogo from "../images/Isoclogo2.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="branding">
        <img src={isocLogo} className="logo" alt="CityBanner" />
        <h1>City St George's ISoc</h1>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#committee">Committee</a>
        <a href="#feedback">Feedback</a>
      </nav>
    </header>
  );
}

export default Navbar;
