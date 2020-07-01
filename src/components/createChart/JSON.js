import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { SyncedData } from "./";
import { Link } from "../common";
import {
  startSyncAPI,
  getIsAPISynced,
  getIsJSONUploaded,
  uploadJSONRequest,
} from "../../modules/createChart";

const StyledLink = styled(Link)`
  font-size: 12px;
`;

const Root = styled.div`
  font-size: 12px;
  padding-top: 8px;
`;

const InstructionsLine = styled.div`
  margin-bottom: 6px;
`;

const JSONDumb = ({
  startSyncAPI,
  isAPISynced,
  isJSONUploaded,
  uploadJSON,
}) => (
  <Root>
    <InstructionsLine>
      <StyledLink onClick={startSyncAPI}>Sync with HTTPS API</StyledLink>
      {" or "}
      <StyledLink onClick={uploadJSON}>upload JSON</StyledLink>
    </InstructionsLine>
    {(isAPISynced || isJSONUploaded) && <SyncedData discardable />}
  </Root>
);

const JSON = connect(
  R.applySpec({
    isAPISynced: getIsAPISynced,
    isJSONUploaded: getIsJSONUploaded,
  }),
  { startSyncAPI, uploadJSON: uploadJSONRequest }
)(JSONDumb);

export default JSON;
