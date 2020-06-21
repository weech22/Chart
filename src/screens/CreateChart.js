import React from "react";
import styled from "styled-components";

import { MainView, TabNavigation } from "../components/createChart";

import assets from "../assets";
import ChartTabButton from "../components/ChartTabButton";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #ececec;
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
