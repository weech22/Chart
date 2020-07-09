import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import {
  MainView,
  Charts,
  SyncData,
  CustomizeStyle,
} from "@components/createChart";

import {
  getIsSyncGSShowing,
  getIsSyncAPIShowing,
  getIsCustomizeStyleShowing,
} from "@modules/createChart";

const Root = styled.div`
  display: flex;
`;

const CreateChartDumb = ({
  isSyncAPIShowing,
  isSyncGSShowing,
  isCustomizeStyleShowing,
}) => {
  return (
    <Root>
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
  })
)(CreateChartDumb);

export default CreateChart;
