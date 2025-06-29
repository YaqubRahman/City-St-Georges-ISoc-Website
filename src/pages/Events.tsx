import Navbar from "../components/Navbar";
import "../styles/Events.css";
import BrothersCircleImage from "../images/BrothersCircleImage.png";
import PalestineCharityImage from "../images/PalestineCharityImage.png";
function Events() {
  return (
    <>
      <div className="hero">
        <Navbar />
      </div>
      <div className="title">
        <h1>Events</h1>
      </div>

      <div className="events-container">
        <div className="events-box">
          <p>Brothers Circle</p>
          <div className="events-text">
            <img
              src={BrothersCircleImage}
              className="events-image"
              alt="BrothersCircle"
            />
            <p>16:00 Every Wednesday</p>
          </div>
        </div>
        <div className="events-box">
          <p>Palestine Charity Stall</p>
          <div className="events-text">
            <img
              src={PalestineCharityImage}
              className="events-image"
              alt="PalestineCharity"
            />
            <p>Univeristy corridor</p>
          </div>
        </div>
        <div className="events-box">
          <p>Event 3</p>
          <div className="events-text"></div>
        </div>
        <div className="events-box">
          <p>Event 4</p>
          <div className="events-text"></div>
        </div>
      </div>
    </>
  );
}

export default Events;
