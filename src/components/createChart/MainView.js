import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { TabMenu } from "./Tabs";
import { Title, Footer } from "@components/common";
import { CustomizeStyle } from "@components/createChart";
import {
  getCurrentChart,
  getIsCustomizeStyleShowing,
  startCustomizeStyle,
  createChartRequest,
} from "@modules/createChart";
import { tabs } from "@app/constants";

const Root = styled.div`
  background: ${({ theme: { white } }) => white};
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Title)`
  padding: 16px 16px 8px 16px;
`;

const MainViewDumb = ({
  currentChart,
  isCustomizeStyleShowing,
  startCustomizeStyle,
  createChartRequest,
}) => {
  const footerControls = {
    leftButton: {
      onClick: startCustomizeStyle,
      caption: "Customize chart style",
    },
    rightButton: {
      onClick: () => {},
      caption: "Support",
    },
    mainButton: {
      onClick: createChartRequest,
      caption: "Create chart",
    },
  };

  return (
    <Root>
      {isCustomizeStyleShowing && <CustomizeStyle />}
      {!isCustomizeStyleShowing && (
        <Fragment>
          <StyledTitle>{tabs[currentChart].title}</StyledTitle>
          <TabMenu />
          <Footer controls={footerControls} />
        </Fragment>
      )}
    </Root>
  );
};

const MainView = connect(
  R.applySpec({
    currentChart: getCurrentChart,
    isCustomizeStyleShowing: getIsCustomizeStyleShowing,
  }),
  { startCustomizeStyle, createChartRequest }
)(MainViewDumb);

export default MainView;
