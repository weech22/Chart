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
import { charts } from "@app/constants";

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
  createChart,
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
      onClick: createChart,
      caption: "Create chart",
    },
  };

  return (
    <Root>
      {isCustomizeStyleShowing && <CustomizeStyle />}
      {!isCustomizeStyleShowing && (
        <Fragment>
          <StyledTitle>{charts[currentChart].title}</StyledTitle>
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
  { startCustomizeStyle, createChart: () => submit(forms.RANDOM) }
)(MainViewDumb);

export default MainView;
