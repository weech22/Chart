import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ColorsTab from "./ColorsTab";
import SettingsTab from "./SettingsTab";
import { getCurrentChart } from "@modules/createChart";
import { tabs, styleSettingsTypes } from "@app/constants";
import { isFigma, isAdobe, platform } from "@app/utils";

const Root = styled.div`
  padding: 0 16px;
  flex: 1;
`;

const StyledTabs = styled(Tabs)``;

const StyledTab = styled(Tab)`
  list-style: none;
  color: ${({ selected }) => (selected ? "#000" : "rgba(0, 0, 0, 0.5)")};
  border-bottom: ${({ selected }) => (selected ? "2px solid #000" : "none")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  cursor: pointer;
  padding-bottom: 5px;
  margin-right: 8px;
`;

const StyledTabList = styled(TabList)`
  display: flex;
  padding: 0;
  margin: 0;
`;

const StyledTabPanel = styled(TabPanel)``;

const StyleTabSwitcher = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Root>
      <StyledTabs
        selectedIndex={selected}
        onSelect={(tabIndex) => setSelected(tabIndex)}
      >
        <StyledTabList>
          <StyledTab selected={selected === 0}>Colors</StyledTab>
          <StyledTab selected={selected === 1}>Settings</StyledTab>
          <StyledTab selected={selected === 2}>Labels</StyledTab>
          <StyledTab selected={selected === 3}>Grid</StyledTab>
        </StyledTabList>

        <StyledTabPanel>
          <ColorsTab />
        </StyledTabPanel>
        <StyledTabPanel>
          <SettingsTab type={styleSettingsTypes.SETTINGS} />
        </StyledTabPanel>
        <StyledTabPanel>
          <SettingsTab type={styleSettingsTypes.LABELS} />
        </StyledTabPanel>
        <StyledTabPanel>
          <SettingsTab type={styleSettingsTypes.GRID} />
        </StyledTabPanel>
      </StyledTabs>
    </Root>
  );
};

export default StyleTabSwitcher;
