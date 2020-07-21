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
  cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
  line-height: 16px;
  font-size: 14px;
  color: ${({ theme: { white } }) => white};
  appearance: none;
  outline: none;
  &:hover {
    background: ${({ isLoading, theme: { darkPink, pink } }) =>
      isLoading ? pink : darkPink};
  }
  opacity: ${({ isLoading }) => (isLoading ? "0.5" : "1")};
`;

export default ({ children, className, onClick, isLoading }) => (
  <Root className={className} onClick={onClick} isLoading={isLoading}>
    {children}
  </Root>
);
