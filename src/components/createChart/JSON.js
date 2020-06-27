import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { Link } from "../common";
import { startSyncAPI } from "../../modules/createChart";

const StyledLink = styled(Link)`
  font-size: 12px;
`;

const Root = styled.div`
  font-size: 12px;
  padding-top: 8px;
`;

const JSONDumb = ({ startSyncAPI }) => (
  <Root>
    <StyledLink onClick={startSyncAPI}>Sync with HTTPS API</StyledLink>
    {" or "}
    <StyledLink>upload JSON</StyledLink>
  </Root>
);

const JSON = connect(null, { startSyncAPI })(JSONDumb);

export default JSON;
