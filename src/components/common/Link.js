import React from "react";
import styled from "styled-components";

const Root = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 16px;
  font-size: 14px;
  color: ${({ theme: { pink } }) => pink};
  &:hover {
    color: ${({ theme: { darkPink } }) => darkPink};
  }
`;

export default ({ children, className, onClick, href }) => (
  <Root className={className} onClick={onClick} href={href} target="_blank">
    {children}
  </Root>
);
