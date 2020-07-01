import React from "react";
import styled from "styled-components";

import assets from "../../assets";

const Root = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${assets.icons.cross});
  background-size: 15px;
  border: none;
  cursor: pointer;
  height: 15px;
  width: 15px;
  appearance: none;
  outline: none;
`;

export default ({ className, onClick }) => (
  <Root className={className} onClick={onClick} />
);
