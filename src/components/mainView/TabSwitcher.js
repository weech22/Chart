import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Random, Table, JSON } from "./";

import { getCurrentChart } from "../../modules/chart";
import { tabs } from "../../constants";

const Root = styled.div`
  flex-basis: 100%;
  padding: 0 16px;
  width: 100%;
`;

const StyledTabs = styled(Tabs)``;

const StyledTab = styled(Tab)`
  background: ${({ selected, theme: { white } }) =>
    selected ? white : "transparent"};
  width: 122px;
  border: 1px solid green;
  height: 24px;
  font-size: 14px;
  padding: 4px 0;
  line-height: 16px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledTabList = styled(TabList)`
  display: flex;
  border-radius: 4px;
  background-color: ${({ theme: { grey } }) => grey};
  padding: 4px;
  justify-content: space-between;
`;

const StyledTabPanel = styled(TabPanel)``;

const TabSwitcher = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Root>
      <StyledTabs
        selectedIndex={selected}
        onSelect={(tabIndex) => setSelected(tabIndex)}
      >
        <StyledTabList>
          <StyledTab selected={selected === 0}>Random</StyledTab>
          <StyledTab selected={selected === 1}>Table</StyledTab>
          <StyledTab selected={selected === 2}>JSON</StyledTab>
        </StyledTabList>

        <StyledTabPanel>
          <Random />
        </StyledTabPanel>
        <StyledTabPanel>
          <Table />
        </StyledTabPanel>
        <StyledTabPanel>
          <JSON />
        </StyledTabPanel>
      </StyledTabs>
    </Root>
  );
};

export default TabSwitcher;
