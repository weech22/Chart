import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";
import tinycolor from "tinycolor2";
import { Form, Field, reduxForm } from "redux-form";

import { forms } from "@app/constants";
import { ColorList } from "@components/common";
import { customizeStyleConfig } from "@config";
import { useThisStyleRequest, getCurrentChart } from "@modules/createChart";

const Root = styled.div`
  padding: 16px 16px 0 0;
  flex: 1;
`;

const ColorsTabDumb = ({ handleSubmit, currentChart }) => {
  const colors = customizeStyleConfig[currentChart].COLORS.map((color) =>
    tinycolor(color).toHsl()
  );

  return (
    <Form onSubmit={handleSubmit(useThisStyleRequest)}>
      <Root>
        <Field
          component={ColorList}
          dafaultValue={colors}
          withDocumentColors
          name={`${currentChart}_colors`}
        />
      </Root>
    </Form>
  );
};

const ColorsTab = R.compose(
  connect(R.applySpec({ currentChart: getCurrentChart }), {}),
  reduxForm({
    form: forms.CUSTOM_STYLE,
    enableReinitialize: true,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })
)(ColorsTabDumb);

export default ColorsTab;
