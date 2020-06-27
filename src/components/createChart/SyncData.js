import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import {
  getIsSyncGSShowing,
  getIsSyncAPIShowing,
} from "../../modules/createChart";

const Root = styled.div`
  background: ${({ theme: { white } }) => white};
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

const SyncDataDumb = ({ IsSyncGSShowing, IsSyncAPIShowing }) => (
  <Root>
    Sync data {(IsSyncGSShowing && "gs") || (IsSyncAPIShowing && "api")}
  </Root>
);

const SyncData = connect(
  R.applySpec({
    IsSyncAPIShowing: getIsSyncAPIShowing,
    IsSyncGSShowing: getIsSyncGSShowing,
  })
)(SyncDataDumb);

export default SyncData;
