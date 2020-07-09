import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { Title, Footer } from "@components/common";
import { hideColorPicker } from "@modules/createChart";
import ColorPicker from "./ColorPicker";
import { isAdobe } from "@app/utils";

const Backdrop = styled.div`
  position: absolute;
  right: ${isAdobe ? "34" : "0"}px;
  top: ${isAdobe ? "35" : "0"}px;
  bottom: ${isAdobe ? "44" : "0"}px;
  left: ${isAdobe ? "36" : "0"}px;

  background: rgba(0, 0, 0, 0.8);
  z-index: 5;
`;

const Root = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  width: 50%;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  z-index: 6;
`;

const StyledTitle = styled(Title)`
  font-size: 14px;
  font-weight: bold;
  padding: ${isAdobe ? "8px 7px 0 16px" : "16px 16px 4px 16px"};
`;

// TODO: Store the whole color object
const defaultColor = {
  hsl: { h: 3, s: 0.2, l: 0.2, a: 1 },
  hex: "#3d2a29",
  rgb: { r: 61, g: 42, b: 41, a: 1 },
  hsv: { h: 3, s: 0.33, v: 0.23998, a: 1 },
};

const ColorPickerModalDumb = ({
  className,
  hideColorPicker,
  color = defaultColor,
}) => {
  const [currentColor, pickColor] = useState(defaultColor);

  useEffect(() => {
    pickColor(color);
  }, [color]);

  const footerControls = {
    mainButton: {
      onClick: () => {},
      caption: "Save color",
    },
  };

  return (
    <Backdrop className={className}>
      <Root>
        <StyledTitle onClose={hideColorPicker}>Color</StyledTitle>
        <ColorPicker color={currentColor} onChange={pickColor} />
        <Footer controls={footerControls} />
      </Root>
    </Backdrop>
  );
};

const ColorPickerModal = connect(null, { hideColorPicker })(
  ColorPickerModalDumb
);

export default ColorPickerModal;
