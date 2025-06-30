import Navbar from "../components/Navbar";
import "../styles/Committee.css";
import ArhaamPhoto from "../images/ArhaamPhoto.jpeg";
import StockPfpImage from "../images/StockPfpImage.png";

function Committee() {
  return (
    <>
      <Navbar />
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
          <p>ISoc Vice President:</p>
          <p>Name Surname</p>
          <img src={StockPfpImage} className="photo" alt="StockPhoto" />
        </div>
        <div className="committee-box">
          <p>ISoc Media Officer:</p>
          <p>Name Surname</p>
          <img src={StockPfpImage} className="photo" alt="StockPhoto" />
        </div>
      </div>
    </>
  );
}

export default Committee;
