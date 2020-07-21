import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { customizeStyleConfig } from "@config";
import ColorsTab from "./ColorsTab";
import SettingsTab from "./SettingsTab";
import { getCurrentChart } from "@modules/createChart";
import { tabs, styleSettingsTypes } from "@app/constants";
import { isFigma, isAdobe, platform } from "@app/utils";

const Root = styled.div`
  padding: 0 16px;
`;

const StyledTabs = styled(Tabs)``;

const StyledTab = styled(Tab)`
  list-style: none;
  color: ${({ selected }) => (selected ? "#000" : "rgba(0, 0, 0, 0.5)")};
  border-bottom: ${({ selected }) => (selected ? "2px solid #000" : "none")};
  font-weight: bold;
  cursor: pointer;
  padding-bottom: 5px;
  margin-right: 8px;
  font-size: 14px;
`;

const StyledTabList = styled(TabList)`
  display: flex;
  padding: 0;
  margin: 0;
`;

const StyledTabPanel = styled(TabPanel)`
  overflow-y: scroll;
  max-height: 196px;
  padding: 0;
`;

const StyleTabSwitcherDumb = ({ currentChart }) => {
  const [selected, setSelected] = useState(0);

  const showSettingsFields = !!customizeStyleConfig[currentChart][
    styleSettingsTypes.SETTINGS
  ];
  const showLabelsFields = !!customizeStyleConfig[currentChart][
    styleSettingsTypes.LABELS
  ];
  const showGridFields = !!customizeStyleConfig[currentChart][
    styleSettingsTypes.GRID
  ];

  return (
    <Root>
      <StyledTabs
        selectedIndex={selected}
        onSelect={(tabIndex) => setSelected(tabIndex)}
      >
        <StyledTabList>
          <StyledTab selected={selected === 0}>Colors</StyledTab>
          {showSettingsFields && (
            <StyledTab selected={selected === 1}>Settings</StyledTab>
          )}
          {showLabelsFields && (
            <StyledTab selected={selected === 2}>Labels</StyledTab>
          )}
          {showGridFields && (
            <StyledTab selected={selected === 3}>Grid</StyledTab>
          )}
        </StyledTabList>

        <StyledTabPanel>
          <ColorsTab />
        </StyledTabPanel>

        <StyledTabPanel>
          <SettingsTab tab={styleSettingsTypes.SETTINGS} />
        </StyledTabPanel>
        <StyledTabPanel>
          <SettingsTab tab={styleSettingsTypes.LABELS} />
        </StyledTabPanel>
        <StyledTabPanel>
          <SettingsTab tab={styleSettingsTypes.GRID} />
        </StyledTabPanel>
      </StyledTabs>
    </Root>
  );
};

const StyleTabSwitcher = connect(
  R.applySpec({ currentChart: getCurrentChart })
)(StyleTabSwitcherDumb);

export default StyleTabSwitcher;
