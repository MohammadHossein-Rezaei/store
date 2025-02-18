import "./styles.css";
import emily from "/images/image-emily.jpg";

export default function Comment() {
  return (
    <div className="comments-section">
      <h4 className="titles color-title ">CLIENT TESTIMONIALS</h4>
      <div className="comments-container">
        <div className="comment">
          <img src={emily} alt="profile" />
          <p className="paragraph-p">
            We put trust in Sunnyside and they delivered, making sure our needs
            were met and deadlines were always hit.
          </p>
          <h4 className="titles">Emily R.</h4>
          <p className="paragraph-p">Marketing Director</p>
        </div>
        <div className="comment">
          <img src={emily} alt="profile" />
          <p className="paragraph-p">
            We put trust in Sunnyside and they delivered, making sure our needs
            were met and deadlines were always hit.
          </p>
          <h4 className="titles">Emily R.</h4>
          <p className="paragraph-p">Marketing Director</p>
        </div>
        <div className="comment">
          <img src={emily} alt="profile" />
          <p className="paragraph-p">
            We put trust in Sunnyside and they delivered, making sure our needs
            were met and deadlines were always hit.
          </p>
          <h4 className="titles">Emily R.</h4>
          <p className="paragraph-p">Marketing Director</p>
        </div>
      </div>
    </div>
  );
}
