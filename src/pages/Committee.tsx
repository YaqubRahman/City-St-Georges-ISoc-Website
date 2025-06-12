import isocLogo from "../images/Isoclogo2.png";

function Committee() {
  return (
    <>
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
      </div>
      <h1>Committee</h1>

      <p>ISoc President</p>
      <p>ISoc Vice President</p>
    </>
  );
}

export default Committee;
