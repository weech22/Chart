import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";
import { TabSwitcher, Footer } from "./";
import Title from "./Title";

import { getCurrentChart } from "../../modules/createChart";
import { tabs } from "../../constants";

const Root = styled.div`
  background: ${({ theme: { white } }) => white};
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Title)`
  padding: 16px 16px 8px 16px;
`;

const MainViewDumb = ({ currentChart }) => (
  <Root>
    <StyledTitle>{tabs[currentChart].title}</StyledTitle>
    <TabSwitcher />
    <Footer />
  </Root>
);

const MainView = connect(R.applySpec({ currentChart: getCurrentChart }))(
  MainViewDumb
);

export default MainView;
