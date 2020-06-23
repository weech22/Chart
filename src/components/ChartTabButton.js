import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { getIsPro } from "../modules/account";
import { getCurrentChart } from "../modules/chart";

const Root = styled.span`
  width: 32px;
  height: 32px;
  margin: 0;
  appearance: none;
  outline: none;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};
  &:hover {
    opacity: 1;
    transition: opacity 0.2s;
  }
  &:disabled {
    cursor: not-allowed;
  }
  border-radius: 8px;
  border: none;
  background-image: url(${({ icon }) => icon});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: ${({ isActive }) => (isActive ? "#fff" : "transparent")};
`;

// TODO: Helper isDisabled function(isPro, chartType)
const ChartTabButtonDumb = ({
  icon,
  type,
  isPro,
  currentChart,
  key,
  onClick,
}) => (
  <Root
    key={key}
    icon={icon}
    disabled={isPro}
    isActive={currentChart === type}
    onClick={() => onClick(type)}
  />
);

const ChartTabButton = connect(
  R.applySpec({ isPro: getIsPro, currentChart: getCurrentChart })
)(ChartTabButtonDumb);

export default ChartTabButton;
