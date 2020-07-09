import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";

const Root = styled.div`
  padding-top: 16px;
`;

const SettingsTabDumb = ({}) => <Root>SettingsTabDumb</Root>;

const SettingsTab = connect(R.applySpec({}), {})(SettingsTabDumb);

export default SettingsTab;
