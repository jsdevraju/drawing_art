import "../styles/editor.scss";
import { CirclePicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import { useState } from "react";

const Editor = () => {
  //control all state
  const [panelWidth, setPanelWidth] = useState(20);
  const [panelHeight, setPanelHeight] = useState(20);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setSelectedColor] = useState("#f44336");

  // DrawingPanel function start here
  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    //dynamic button text render here
    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  };

  //track when color change
  const changeColor = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <>
      <div id="editor">
        <h1>Pixel Editor</h1>
        {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
        {hideDrawingPanel && (
          <div id="options">
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelWidth}
                onChange={(e) => {
                  setPanelWidth(e.target.value);
                }}
              />
              <span>Width</span>
            </div>
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelHeight}
                onChange={(e) => {
                  setPanelHeight(e.target.value);
                }}
              />
              <span>Height</span>
            </div>
          </div>
        )}
        {/* Drawing initializeDrawingPanel button */}
        <button onClick={initializeDrawingPanel} className="button">
          {buttonText}
        </button>
        {/* Color Picker Define */}
        {hideOptions && (
          <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
        )}

        {/* Drawing initializeDrawingPanel */}
        {hideOptions && (
          <DrawingPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
          />
        )}
      </div>
    </>
  );
};

export default Editor;
