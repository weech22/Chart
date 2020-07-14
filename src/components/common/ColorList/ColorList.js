import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";

import ColorItem from "./ColorItem";
import DocumentColors from "./DocumentColors";
import { swap } from "@app/utils";
import { showColorPicker, editColor } from "@modules/createChart";

const Root = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;
`;

const StyledColorItem = styled(ColorItem)`
  margin-bottom: 4px;
`;

const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

// TODO: Prop withAddButton(for Templates screen)
const ColorsListDumb = ({
  withDocumentColors,
  editColor,
  dafaultValue,
  input: { onChange, value },
}) => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    console.log("[]");
    if (!value) {
      setColorList(dafaultValue);
    } else {
      setColorList(value);
    }
  }, []);

  useEffect(() => {
    onChange(colorList);
  }, [colorList]);

  const remove = (index) => {
    setColorList((colorList) => R.remove(index, 1, colorList));
  };

  const moveUp = (index) => {
    setColorList((colorList) => swap(index, index - 1, colorList));
  };

  const moveDown = (index) => {
    setColorList((colorList) => swap(index, index + 1, colorList));
  };

  const addColor = (newColor) => {
    const isColorExist = Boolean(
      colorList.find((color) => R.equals(color, newColor))
    );

    if (!isColorExist) {
      setColorList((colorList) => [...colorList, newColor]);
    }
  };

  const onSaveColor = (index) => (color) => {
    setColorList((colorList) => [
      ...colorList.slice(0, index),
      color,
      ...colorList.slice(index + 1),
    ]);
  };

  const handleEditColor = (color, index) => {
    editColor({ color, onSaveColor: onSaveColor(index) });
  };

  return (
    <Root>
      <ColorsContainer>
        {colorList.map((color, index) => (
          <StyledColorItem
            color={color}
            index={index}
            key={`${color.h}${color.s}${color.l}${color.a}`}
            moveUp={moveUp}
            moveDown={moveDown}
            remove={remove}
            onClick={() => handleEditColor(color, index)}
          />
        ))}
      </ColorsContainer>

      {withDocumentColors && <DocumentColors onAddColor={addColor} />}
    </Root>
  );
};

const ColorsList = connect(R.applySpec({}), { showColorPicker, editColor })(
  ColorsListDumb
);

export default ColorsList;
