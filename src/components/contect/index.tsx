import "./styles.css";
import faceBook from "/images/icon-facebook.svg";
import instagram from "/images/icon-instagram.svg";
import twitter from "/images/icon-twitter.svg";
import pinterest from "/images/icon-pinterest.svg";

export default function Contect() {
  return (
    <div className="contect">
      <b>sunnyside</b>
      <ul className="contect-list">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="social-media">
        <img src={faceBook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
      </div>
    </div>
  );
}
