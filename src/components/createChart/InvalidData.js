import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { TabMenu } from "./Tabs";
import { Link } from "@components/common";
import { CustomizeStyle } from "@components/createChart";
import {
  getCurrentChart,
  getIsCustomizeStyleShowing,
  startCustomizeStyle,
  createChartRequest,
} from "@modules/createChart";

const Root = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  left: 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.9);
  font-size: 14px;
`;

// TODO: lres
const InvalidDataDumb = ({}) => {
  return (
    <Root>
      Your data is not valid. <Link>Check an example</Link>
    </Root>
  );
};

const InvalidData = connect(R.applySpec({}), {})(InvalidDataDumb);

export default InvalidData;
