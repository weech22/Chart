import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";

import ColorItem from "./ColorItem";
import { swap } from "@app/utils";
import { showColorPicker } from "@modules/createChart";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledColorItem = styled(ColorItem)`
  margin-bottom: 4px;
`;

const ColorsListDumb = ({ colors, showColorPicker }) => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    setColorList(colors);
  }, [colors]);

  const remove = (index) => {
    setColorList(R.remove(index, 1, colorList));
  };

  const moveUp = (index) => {
    setColorList(swap(index, index - 1, colorList));
  };

  const moveDown = (index) => {
    setColorList(swap(index, index + 1, colorList));
  };

  return (
    <Root>
      {colorList.map((color, index) => (
        <StyledColorItem
          color={color}
          index={index}
          key={`${color.r}${color.g}${color.b}${color.a}`}
          moveUp={moveUp}
          moveDown={moveDown}
          remove={remove}
          onClick={showColorPicker}
        />
      ))}
    </Root>
  );
};

const ColorsList = connect(R.applySpec({}), { showColorPicker })(
  ColorsListDumb
);

export default ColorsList;
