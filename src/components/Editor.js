import { Slider } from "@mui/material";
import React, { useState } from "react";

export default function Editor(props) {
  const defaultEditValues = {
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    blurness: 0,
    saturation: 100,
  };

  const [saturationVal, setSaturationVal] = useState(
    defaultEditValues.saturation
  );
  const [blurVal, setBlurVal] = useState(defaultEditValues.blurness);
  const [brightnessVal, setBrightnessVal] = useState(
    defaultEditValues.brightness
  );
  const [contrastVal, setContrastVal] = useState(defaultEditValues.contrast);
  const [grayscaleVal, setGrayscaleVal] = useState(defaultEditValues.grayscale);

  const editorStyle = {};
  let edits =  {
    filter: `saturate(${saturationVal}%) blur(${blurVal}px) brightness(${brightnessVal}%) contrast(${contrastVal}%) grayscale(${grayscaleVal}%)`
  };

  const changeSaturation = (e) => {
    setSaturationVal(e.target.value);
    edits = {
      filter: `saturate(${saturationVal}%) blur(${blurVal}px) brightness(${brightnessVal}%) contrast(${contrastVal}%) grayscale(${grayscaleVal}%)`
    };
  };

  const changeBrightness = (e) => {
    setBrightnessVal(e.target.value);
    edits = {
      filter: `saturate(${saturationVal}%) blur(${blurVal}px) brightness(${brightnessVal}%) contrast(${contrastVal}%) grayscale(${grayscaleVal}%)`
    };
  };

  const changeContrast = (e) => {
    setContrastVal(e.target.value);
    edits = {
      filter: `saturate(${saturationVal}%) blur(${blurVal}px) brightness(${brightnessVal}%) contrast(${contrastVal}%) grayscale(${grayscaleVal}%)`
    };
  };

  const changeGrayscale = (e) => {
    setGrayscaleVal(e.target.value);
    edits = {
      filter: `saturate(${saturationVal}%) blur(${blurVal}px) brightness(${brightnessVal}%) contrast(${contrastVal}%) grayscale(${grayscaleVal}%)`
    };
  };

  const changeBlurness = (e) => {
    setBlurVal(e.target.value);
    edits = {
      filter: `saturate(${saturationVal}%) blur(${blurVal}px) brightness(${brightnessVal}%) contrast(${contrastVal}%) grayscale(${grayscaleVal}%)`
    };
  };

  if (props.visible) {
    return (
      <div className="container editor" style={editorStyle}>
        <div className="tools">

          <div className="tool">
            <p>Saturation: {saturationVal}%</p>
            <Slider
              size="small"
              defaultValue={defaultEditValues.saturation}
              min={0}
              max={200}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={changeSaturation}
            ></Slider>
          </div>

          <div className="tool">
            <p>Brightness: {brightnessVal}%</p>
            <Slider
              size="small"
              defaultValue={defaultEditValues.brightness}
              min={0}
              max={200}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={changeBrightness}
            ></Slider>
          </div>

          <div className="tool">
            <p>Contrast: {contrastVal}%</p>
            <Slider
              size="small"
              defaultValue={defaultEditValues.contrast}
              min={0}
              max={200}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={changeContrast}
            ></Slider>
          </div>

          <div className="tool">
            <p>Blur: {blurVal}%</p>
            <Slider
              size="small"
              defaultValue={defaultEditValues.blurness}
              min={0}
              max={5}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={changeBlurness}
            ></Slider>
          </div>

          <div className="tool">
            <p>Grayscale: {grayscaleVal}%</p>
            <Slider
              size="small"
              defaultValue={defaultEditValues.grayscale}
              min={0}
              max={200}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={changeGrayscale}
            ></Slider>
          </div>

        </div>
        <img src={props.path} alt="Loading" width={300} style={edits}></img>
      </div>
    );
  } else return <></>;
}
