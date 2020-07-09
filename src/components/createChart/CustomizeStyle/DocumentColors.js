import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";

const Root = styled.div`
  display: flex;
`;

const DocumentColorsDumb = ({}) => (
  <Root>Add new color or select from Document colors:</Root>
);

const DocumentColors = connect(R.applySpec({}), {})(DocumentColorsDumb);

export default DocumentColors;
