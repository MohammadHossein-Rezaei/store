import { useState } from "react";
import "./styles.css";

export default function MenuLayout() {
  const [isMobile] = useState<boolean>(window.innerWidth <= 675);
  return (
    <main className="main-layout">
      <div className="paragraph">
        <div className="paragraph-content">
          <h1 className="titles">Transform your brand</h1>
          <p className="paragraph-p">
            we are full-service creative agency speciallizing in helping brands
            grow fast. engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h3 className="titles">LEARN MORE</h3>
        </div>
      </div>
      <img
        className="image-1"
        src="/images/desktop/image-transform.jpg"
        alt="image"
      />
      <img
        className="image-2"
        src="/images/desktop/image-stand-out.jpg"
        alt="image"
      />
      <div className="paragraph">
        <div className="paragraph-content">
          <h1 className="titles">Stand out to the right audience</h1>
          <p className="paragraph-p">
            Using a collaborative formula of designers, reserchers,
            photographers, videographers, and copywriters,we'll build and extend
            your brand in digital places.
          </p>
          <h3 className="titles">LEARN MORE</h3>
        </div>
      </div>
      <div className="position">
        <img
          className="banner"
          src={
            isMobile
              ? "/images/mobile/image-graphic-design.jpg"
              : "/images/desktop/image-graphic-design.jpg"
          }
          alt="banner"
        />
        <div className="paragraph-content position-p  ">
          <h2 className="titles text-color1 ">Graphic Design</h2>
          <p className="paragraph-p  text-color1 ">
            Greate design makes you memorable. we deliver artwork that
            underscores your brand message and captures potential clients'
            attention
          </p>
        </div>
      </div>
      <div className="position">
        <img
          className="banner"
          src={
            isMobile
              ? "/images/mobile/image-photography.jpg"
              : "/images/desktop/image-photography.jpg"
          }
          alt="banner"
        />
        <div className="paragraph-content position-p  ">
          <h2 className="titles text-color2 ">Photograghy</h2>
          <p className="paragraph-p text-color2 ">
            increase your credibility by getting the most stunning high-quality
            phoyo that improve ypur business image
          </p>
        </div>
      </div>
    </main>
  );
}
