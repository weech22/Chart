import React, { useEffect } from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";
import tinycolor from "tinycolor2";

import { Link } from "@components/common";
import {
  getDocumentColors,
  fetchDocumentColorsRequest,
  editColor,
} from "@modules/createChart";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 32px);
  margin-left: 32px;
  font-size: 14px;
`;

const ColorSample = styled.span`
  width: 24px;
  height: 24px;
  max-width: 24px;
  background-color: ${({ color }) => `#${tinycolor(color).toHex()}`};
  cursor: pointer;
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  flex: 0 0 20%;
`;

const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -4px;
  margin-bottom: -4px;
  margin-top: 8px;
  max-width: 140px;
`;

const defaultAddColor = { h: 129, s: 0.42, l: 0.11, a: 1 };

const DocumentColorsDumb = ({
  documentColors,
  fetchDocumentColorsRequest,
  onAddColor,
  editColor,
}) => {
  useEffect(() => {
    fetchDocumentColorsRequest();
  }, []);

  const addColor = () => {
    editColor({ color: defaultAddColor, onSaveColor: onAddColor });
  };

  return (
    <Root>
      <div>
        <Link onClick={addColor}>Add new color</Link> or select
      </div>
      from Document colors:
      <ColorsContainer>
        {documentColors.map((color) => (
          <ColorSample
            color={color}
            key={`${color.h}${color.s}${color.l}${color.a}`}
            onClick={() => onAddColor(color)}
          />
        ))}
      </ColorsContainer>
    </Root>
  );
};

const DocumentColors = connect(
  R.applySpec({ documentColors: getDocumentColors }),
  { fetchDocumentColorsRequest, editColor }
)(DocumentColorsDumb);

export default DocumentColors;
