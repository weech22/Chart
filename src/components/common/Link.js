import React from "react";
import styled from "styled-components";

const Root = styled.a`
  text-deoration: none;
  cursor: pointer;
  line-height: 16px;
  font-size: 14px;
  color: ${({ theme: { pink } }) => pink};
`;

export default ({ children, className, onClick }) => (
  <Root className={className} onClick={onClick}>
    {children}
  </Root>
);
