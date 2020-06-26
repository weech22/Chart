import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { selectChartTabRequest } from "../../modules/chart";
import { tabs } from "../../constants";
import ChartTabButton from "../common/ChartTabButton";
import { isFigma, isAdobe } from "../../utils";

const Root = styled.div`
  padding: 8px;
  background: ${({ theme: { grey } }) => grey};
  height: 400px;
  flex-basis: 88px;
  min-width: ${isAdobe ? "88px" : "0"};
`;

const TabContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 320px;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
`;

const TabNavigationDumb = ({ selectChartTab }) => {
  const tabsToRender = Object.keys(tabs).map((chartType) => ({
    type: chartType,
    ...tabs[chartType],
  }));

  return (
    <Root>
      <TabContainer>
        {tabsToRender.map(({ type, icon }) => (
          <ChartTabButton
            icon={icon}
            type={type}
            key={type}
            onClick={selectChartTab}
          />
        ))}
      </TabContainer>
    </Root>
  );
};

const TabNavigation = connect(null, { selectChartTab: selectChartTabRequest })(
  TabNavigationDumb
);

export default TabNavigation;
