import React from "react";
import styled from "styled-components";

import { Title, TabSwitcher, Footer } from "./";
import { isFigma } from "../../utils";

const Root = styled.div`
  background: ${({ theme: { white } }) => white};
  flex-basis: 100%;
`;

export default () => (
  <Root>
    <Title />
    <TabSwitcher />
    <Footer />
  </Root>
);
