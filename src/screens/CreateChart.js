import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { MainView, TabNavigation, SyncData } from "../components/createChart";
import {
  getIsSyncGSShowing,
  getIsSyncAPIShowing,
} from "../modules/createChart";

const Root = styled.div`
  display: flex;
`;

const CreateChartDumb = ({ IsSyncAPIShowing, IsSyncGSShowing }) => {
  return (
    <Root>
      {(IsSyncAPIShowing || IsSyncGSShowing) && <SyncData />}
      {!(IsSyncAPIShowing || IsSyncGSShowing) && (
        <Fragment>
          <TabNavigation />
          <MainView />
        </Fragment>
      )}
    </Root>
  );
};

const CreateChart = connect(
  R.applySpec({
    IsSyncAPIShowing: getIsSyncAPIShowing,
    IsSyncGSShowing: getIsSyncGSShowing,
  })
)(CreateChartDumb);

export default CreateChart;
