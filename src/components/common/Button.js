import React from "react";
import styled from "styled-components";

const Root = styled.span`
  display: flex;
  align-items: center;
  border-radius: 4px;
  max-height: 32px;
  background: ${({ theme: { pink } }) => pink};
  padding: 8px;
  border: none;
  cursor: pointer;
  line-height: 16px;
  font-size: 14px;
  color: ${({ theme: { white } }) => white};
  appearance: none;
  outline: none;
`;

export default ({ children, className, onClick }) => (
  <Root className={className} onClick={onClick}>
    {children}
  </Root>
);
