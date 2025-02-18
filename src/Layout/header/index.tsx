import { useEffect, useState } from "react";
import "./styles.css";
import hamB from "/images/icon-hamburger.svg";
import arrowDown from "/images/icon-arrow-down.svg";
import imageHeaderM from "/images/icon-arrow-down.svg";
import imageHeaderD from "/images/desktop/image-header.jpg";

export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 675);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 675px)");

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h2 className="title-header">sunnyside</h2>
        {isMobile ? (
          <>
            <img
              className="menu-mobile"
              src={hamB}
              alt="menu"
              onClick={toggleMenu}
            />

            {isMenuOpen && (
              <ul className="ul-mobile-header">
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            )}
          </>
        ) : (
          <ul className="ul-header">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        )}
        <div className="logo-header">
          <h1 className="titles">WE ARE CREATIVES</h1>
          <img src={arrowDown} alt="down" />
        </div>
      </div>

      <img
        className="banner"
        src={isMobile ? imageHeaderM : imageHeaderD}
        alt="banner"
      />
    </header>
  );
}
