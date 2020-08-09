import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";
import tinycolor from "tinycolor2";

import ColorItem from "@components/common/ColorList/ColorItem";
import { editColor } from "@modules/createChart";

const Root = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

// TODO: Reuse
const Label = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  position: absolute;
  top: -17px;
`;

const ColorInputDumb = ({
  className,
  editColor,
  label,
  input: { onChange, value },
  defaultValue,
}) => {
  const handleClick = () => {
    editColor({ color: value, onSaveColor: onChange });
  };

  useEffect(() => {
    if (!value) {
      onChange(tinycolor(defaultValue).toHsl());
    }
  }, []);

  return (
    <Root className={className}>
      <Label>{label}</Label>
      <ColorItem
        onClick={handleClick}
        color={value || tinycolor(defaultValue).toHsl()}
      />
    </Root>
  );
};

const ColorInput = connect(R.applySpec({}), { editColor })(ColorInputDumb);

export default ColorInput;
