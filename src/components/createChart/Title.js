import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
`;

export default ({ children, className }) => (
  <Root className={className}>{children}</Root>
);
