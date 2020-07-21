import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import * as R from "ramda";
import { CustomPicker } from "react-color";
import tinycolor from "tinycolor2";

import {
  Saturation,
  EditableInput,
  Hue,
} from "react-color/lib/components/common";

import { isAdobe } from "@app/utils";

// TODO: Re-use common styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 0 16px;
  flex: 1;
`;

const SaturationContainer = styled.div`
  width: 100%;
  height: 184px;
  position: relative;
`;

const HueContainer = styled.div`
  position: relative;
  height: 12px;
  width: 100%;
  margin: 8px 0;
  border-radius: 6px;
  overflow: hidden;
  background: ${isAdobe
    ? "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"
    : "#fff"};
  cursor: default;
`;

const Pointer = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translate(-7px, -7px);
  background-color: transparent;
  border: 2px solid #fff;
  box-sizing: border-box;
`;

const Slider = styled(Pointer)`
  transform: translate(-7px, 0px);
`;

const ColorSample = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  opacity: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// TODO: styled(EditableInput) ?
const alphaInputStyles = {
  input: {
    border: "none",
    height: "32px",
    width: "56px",
    appearance: "none",
    background: "#f5f5f5",
    padding: "8px",
    borderRadius: "4px",
    fontSize: "14px",
    lineHeight: "16px",
  },
  label: {
    fontSize: "14px",
    lineHeight: "16px",
    color: "#000",
  },
};

const hexInputStyles = {
  input: {
    border: "none",
    height: "32px",
    width: "112px",
    appearance: "none",
    background: "#f5f5f5",
    padding: "8px",
    borderRadius: "4px",
    fontSize: "14px",
    lineHeight: "16px",
  },
  label: {
    fontSize: "14px",
    lineHeight: "16px",
    color: "#000",
  },
};

// TODO: Save alpha in state and pass it back onSaveC
const ColorPicker = memo(({ color, onChange }) => {
  const [hsl, setHsl] = useState({});
  const [hsv, setHsv] = useState({});
  const [hex, setHex] = useState("");
  const [updateTimer, setUpdateTimer] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(updateTimer);
      setUpdateTimer(null);
    };
  }, []);

  const handleAsyncUpdate = () => {
    clearTimeout(updateTimer);

    setUpdateTimer(
      setTimeout(() => {
        // TODO: substitute this abomination for initial check to avoid doing onChange(hsl) on 1st render

        if (!R.equals(hsl, {}) && !R.equals(hsl, { h: 0, s: 0, l: 0, a: 1 })) {
          onChange(hsl);
        }
      }, 200)
    );
  };

  useEffect(() => {
    setHsl(color);
  }, [color]);

  useEffect(() => {
    const newColor = tinycolor(hsl);

    setHsv(newColor.toHsv());
    setHex(newColor.toHex());

    handleAsyncUpdate();
  }, [hsl]);

  const handleHueChange = (hue) => {
    const newColor = tinycolor(hue);

    setHsv(newColor.toHsv());
    setHex(newColor.toHex());
    setHsl(hue);
  };

  const handleSaturationChange = (hsv) => {
    const newColor = tinycolor(hsv).toHsl();

    setHsv(hsv);
    setHsl(newColor);
  };

  const handleHexChange = (value) => {
    const newValue = value.substring(0, 6).toUpperCase();

    setHex(newValue);
    onChange(newValue);
  };

  const handleAlphaChange = (value) => {
    const a = parseInt(value) / 100;

    onChange({ ...hsl, a });
  };

  // TODO: Substitute these inputs for mine

  return (
    <Container>
      <SaturationContainer>
        <Saturation
          hsl={hsl}
          hsv={hsv}
          pointer={Pointer}
          onChange={handleSaturationChange}
        />
      </SaturationContainer>

      <HueContainer>
        <Hue
          hsl={hsl}
          pointer={Slider}
          onChange={handleHueChange}
          direction={"horizontal"}
        />
      </HueContainer>

      <InputContainer>
        <ColorSample style={{ backgroundColor: `#${hex}` }} />

        <EditableInput
          style={hexInputStyles}
          value={hex}
          onChange={handleHexChange} //
        />

        <EditableInput
          style={alphaInputStyles}
          value={`${hsl.a * 100}%`}
          onChange={handleAlphaChange}
        />
      </InputContainer>
    </Container>
  );
});

export default CustomPicker(ColorPicker);
