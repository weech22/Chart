import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { Link } from "../common";
import Spreadsheet from "./Spreadsheet";

const Root = styled.div`
  padding-top: 8px;
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
`;

const Table = () => (
  <Root>
    <div>
      {"Type or paste data into table. "}
      <StyledLink>Sync with Google Sheet</StyledLink>
      {" or "}
      <StyledLink>upload CSV</StyledLink>
    </div>
    <Spreadsheet />
  </Root>
);

/* const Title = connect(R.applySpec({ currentChart: getCurrentChart }))(
  TitleDumb
);
 */
export default Table;
