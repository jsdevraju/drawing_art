import { useState } from "react";
import "../styles/pixel.scss";

const Pixel = ({ selectedColor }) => {
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  //apply color
  const applyColor = () => {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  };

  //changeColorHover
  const chnageColorOnHover = () => {
    setOldColor(pixelColor);
    setCanChangeColor(selectedColor);
  };

  //resetColor
  const resetColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  };

  return (
    <>
      <div
        className="pixel"
        onClick={applyColor}
        onMouseEnter={chnageColorOnHover}
        onMouseLeave={resetColor}
        style={{backgroundColor: pixelColor}}
      ></div>
    </>
  );
};

export default Pixel;
