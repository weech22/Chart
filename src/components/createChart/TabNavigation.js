import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { selectChartTab } from "../../modules/chart";
import { tabs } from "../../constants";
import ChartTabButton from "../ChartTabButton";

const Root = styled.div`
  max-width: 88px;
  height: 400px;
  padding: 8px;
  background: ${({ theme: { grey } }) => grey};
`;

const TabContainer = styled.div`
  display: flex;
  max-height: 320px;
  width: 100%;
  height: 100%;
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

const TabNavigation = connect(null, { selectChartTab })(TabNavigationDumb);

export default TabNavigation;
