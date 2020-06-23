import React from "react";
import styled from "styled-components";

const Root = styled.span`
  border-radius: 4px;
  height: 32px;
  background: ${({ theme: { pink } }) => pink};
  padding: 8px;
  border: none;
  cursor: pointer;
  line-height: 16px;
  font-size: 14px;
  color: ${({ theme: { white } }) => white};
  appearance: none;
  outline: none;
  flex-grow: 0;
`;

const Button = ({ children }) => <Root>{children}</Root>;

export default Button;
