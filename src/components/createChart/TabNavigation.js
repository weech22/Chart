import React from "react";
import styled from "styled-components";

import { tabs } from "../../constants";
import ChartTabButton from "../ChartTabButton";

const Root = styled.div`
  max-width: 88px;
  padding: 8px;
  background: ${({ theme: { grey } }) => grey};
`;

const TabContainer = styled.div`
  display: flex;
  max-height: 320px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TabNavigation = () => {
  return (
    <Root>
      <TabContainer>
        {tabs.map(({ type, icon }) => (
          <ChartTabButton icon={icon} type={type} key={type} />
        ))}
      </TabContainer>
    </Root>
  );
};

export default TabNavigation;
