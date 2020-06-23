import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 0 8px 0;
`;

const Select = styled.select`
  border-radius: 4px;
  width: 180px;
  background: ${({ theme: { pink } }) => pink};
  appearance: none;
  padding: 0;
  margin: 0;
`;

const Label = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  margin-bottom: 6px;
`;

const optionsDummy = ["opt1", "opt2", "opt3"];

const Dropdown = ({ options = optionsDummy, label = "Style" }) => (
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

export default Dropdown;
