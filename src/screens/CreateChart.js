import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { Link, CloseButton } from "@components/common";

import {
  MainView,
  Charts,
  SyncData,
  InvalidData,
} from "@components/createChart";

import {
  getIsSyncGSShowing,
  getIsSyncAPIShowing,
  getIsCustomizeStyleShowing,
  getIsSyncDataValid,
} from "@modules/createChart";

const Root = styled.div`
  display: flex;
`;

const CreateChartDumb = ({
  isSyncAPIShowing,
  isSyncGSShowing,
  isCustomizeStyleShowing,
  isSyncDataValid,
}) => {
  return (
    <Root>
      {!isSyncDataValid && <InvalidData />}
      {(isSyncAPIShowing || isSyncGSShowing) && <SyncData />}
      {!(isSyncAPIShowing || isSyncGSShowing || isCustomizeStyleShowing) && (
        <Fragment>
          <Charts />
          <MainView />
        </Fragment>
      )}
    </Root>
  );
};

const CreateChart = connect(
  R.applySpec({
    isSyncAPIShowing: getIsSyncAPIShowing,
    isSyncGSShowing: getIsSyncGSShowing,
    isSyncDataValid: getIsSyncDataValid,
  })
)(CreateChartDumb);

export default CreateChart;
