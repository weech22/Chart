import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { getCurrentChart } from "../../modules/chart";
import { tabs } from "../../constants";

const Root = styled.div``;

const Random = () => <Root>Random</Root>;

/* const Title = connect(R.applySpec({ currentChart: getCurrentChart }))(
  TitleDumb
);
 */
export default Random;
