import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { getCurrentChart } from "../../modules/chart";
import { tabs } from "../../constants";

const Root = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 16px 0 16px;
  margin-bottom: 9px;
`;

const TitleDumb = ({ currentChart }) => <Root>{tabs[currentChart].title}</Root>;

const Title = connect(R.applySpec({ currentChart: getCurrentChart }))(
  TitleDumb
);

export default Title;
