import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";

import { ColorList } from "@components/common";
import DocumentColors from "./DocumentColors";

const Root = styled.div`
  display: flex;
  padding-top: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-basis: 50%;
`;

const ColorsTabDumb = ({}) => (
  <Root>
    <Column>
      <ColorList
        colors={[
          { r: 21, g: 7, b: 2, a: 0.12 },
          { r: 34, g: 12, b: 12, a: 0.4 },
          { r: 4, g: 1, b: 22, a: 1 },
        ]}
      />
    </Column>
    <Column>
      <DocumentColors />
    </Column>
  </Root>
);

const ColorsTab = connect(R.applySpec({}), {})(ColorsTabDumb);

export default ColorsTab;
