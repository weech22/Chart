import React from "react";
import { Lines } from "react-preloaders";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export default () => {
  return (
    <Root>
      <Lines />
    </Root>
  );
};
