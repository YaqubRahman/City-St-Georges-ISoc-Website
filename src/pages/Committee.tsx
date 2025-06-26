import Navbar from "../components/Navbar";
import "../styles/Committee.css";
import ArhaamPhoto from "../images/ArhaamPhoto.jpeg";

function Committee() {
  return (
    <>
      <div className="hero">
        <Navbar />
      </div>
      <div className="title">
        <h1>Committee</h1>
      </div>
      <div className="committee-container">
        <div className="committee-box">
          <p>ISoc President:</p>
          <p>Arhaam Mukati</p>
          <img src={ArhaamPhoto} className="photo" alt="ArhaamPhoto" />
          <div className="committee-text"></div>
        </div>
        <div className="committee-box">
          <p>ISoc Vice President</p>
        </div>
        <div className="committee-box">
          <p>ISoc Vice President</p>
        </div>
      </div>
    </>
  );
}

export default Committee;
