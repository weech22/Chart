import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: relative;
`;

const Select = styled.select`
  border-radius: 4px;
  width: 180px;
  height: 32px;
  appearance: none;
  padding: 0;
  margin: 0;
`;

const Label = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  position: absolute;
  top: -17px;
`;

const optionsDummy = ["opt1", "opt2", "opt3"];

export default ({ options = optionsDummy, label = "Style" }) => (
  <Root>
    <Label>{label}</Label>
    <Select>
      {options.map((option) => (
        <option style={{ background: "red" }} key={Math.random(100)}>
          {option}
        </option>
      ))}
    </Select>
  </Root>
);
