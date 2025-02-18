import { useState } from "react";
import "./styles.css";
import milkbottlesM from "/images/mobile/image-gallery-milkbottles.jpg";
import milkbottlesD from "/images/desktop/image-gallery-milkbottles.jpg";
import orangeM from "/images/mobile/image-gallery-orange.jpg";
import orangeD from "/images/desktop/image-gallery-orange.jpg";
import coneM from "/images/mobile/image-gallery-cone.jpg";
import coneD from "/images/desktop/image-gallery-cone.jpg";
import sugarcubesM from "/images/mobile/image-gallery-sugarcubes.jpg";
import sugarcubesD from "/images/desktop/image-gallery-sugarcubes.jpg";

type Props = {};

export default function Pictures({}: Props) {
  const [isMobile] = useState<boolean>(window.innerWidth <= 675);
  return (
    <div className="pictures">
      <img src={isMobile ? milkbottlesM : milkbottlesD} alt="" />
      <img src={isMobile ? orangeM : orangeD} alt="" />
      <img src={isMobile ? coneM : coneD} alt="" />
      <img src={isMobile ? sugarcubesM : sugarcubesD} alt="" />
    </div>
  );
}
