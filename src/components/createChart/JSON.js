import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { Link } from "../common";

const StyledLink = styled(Link)`
  font-size: 12px;
`;

const Root = styled.div`
  font-size: 12px;
  padding-top: 8px;
`;

const JSON = () => (
  <Root>
    <StyledLink>Sync with HTTPS API</StyledLink>
    {" or "}
    <StyledLink>upload JSON</StyledLink>
  </Root>
);

/* const Title = connect(R.applySpec({ currentChart: getCurrentChart }))(
  TitleDumb
);
 */
export default JSON;
