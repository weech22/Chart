import React from "react";
import styled from "styled-components";

import { Title, TabSwitcher, Footer } from "../mainView";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  max-width: 408px;
  background: ${({ theme: { white } }) => white};
`;

const MainView = () => {
  console.log("WINDOW", window);
  return (
    <Root>
      <Title />
      <TabSwitcher />
      <Footer />
    </Root>
  );
};

export default MainView;
