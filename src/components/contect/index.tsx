import "./styles.css";
type Props = {};

export default function Contect({}: Props) {
  return (
    <div className="contect">
      <b>sunnyside</b>
      <ul className="contect-list">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="social-media">
        <img src="/images/icon-facebook.svg" alt="facebook" />
        <img src="/images/icon-instagram.svg" alt="instagram" />
        <img src="/images/icon-twitter.svg" alt="twitter" />
        <img src="/images/icon-pinterest.svg" alt="pinterest" />
      </div>
    </div>
  );
}
