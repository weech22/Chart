import React, { useCallback, memo } from "react";
import styled from "styled-components";

const Root = styled.span`
  width: 32px;
  height: 32px;
  margin: 0;
  appearance: none;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ isActive, disabled }) =>
    disabled ? "0.5" : isActive ? "1" : "0.5"};
  border-radius: 8px;
  border: none;
  background-image: url(${({ icon }) => icon});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: ${({ isActive }) => (isActive ? "#fff" : "transparent")};
  transiton: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none"};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
    transition: opacity 0.2s;
  }
`;

// TODO: Wrap everything in the project in useCallback + memo
const TabButton = memo(
  ({ icon, selectChartTab, isActive, isDisabled, type }) => {
    const onClick = useCallback(() => {
      selectChartTab(type);
    }, [type, selectChartTab]);

    const Icon = icon;

    return (
      <Root disabled={isDisabled} isActive={isActive} onClick={onClick}>
        <Icon offset={{ top: 2, left: 2 }} />
      </Root>
    );
  }
);

export default TabButton;
