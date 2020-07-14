import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Random from "./Random";
import Table from "./Table";
import JSON from "./JSON";

import { isFigma } from "@app/utils";

const Root = styled.div`
  padding: 0 16px 16px 16px;
  flex-basis: 100%;
  flex: 1;
`;

const StyledTabs = styled(Tabs)``;

const StyledTab = styled(Tab)`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  background: ${({ selected, theme: { white } }) =>
    selected ? white : "transparent"};
  width: 122px;
  height: ${isFigma ? "20px" : "24px"};
  font-size: 14px;
  padding: 4px 0;
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
  max-width: ${isFigma ? "376px" : "100%"};
  margin: 0;
`;

const StyledTabPanel = styled(TabPanel)``;

// TODO: Lift acive tab to state
const TabMenu = () => {
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

export default TabMenu;
