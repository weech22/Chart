import React from "react";
import styled from "styled-components";

import { MainView, TabNavigation } from "../components/createChart";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const CreateChart = () => {
  return (
    <Root>
      <TabNavigation />
      <MainView />
    </Root>
  );
};

export default CreateChart;
