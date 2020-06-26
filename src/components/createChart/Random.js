import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { isEmpty } from "../../utils";
import { Field, reduxForm, Form, getFormInitialValues } from "redux-form";
import { getCurrentChart, createChartRequest } from "../../modules/chart";
import { tabs, forms, dataDistributionTypes } from "../../constants";
import Input from "../common/Input";
import Dropdown from "../common/Dropdown";

const initialValues = () => ({
  areas: 2,
  lines: 1,
  bars: 5,
  segments: 5,
  min: 0,
  max: 100,
  xmin: 0,
  xmax: 100,
  ymin: 0,
  ymax: 100,
  candles: 10,
  points: 20,
});

const Root = styled.div`
  margin-right: -8px;
`;

const FieldLine = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`;

const getNoFieldsMessage = (chartType) =>
  `${tabs[chartType].title} doesn’t have any settings for random data :-)`;

const ProTip = styled.div`
  line-height: 16px;
  margin-top: 16px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

const NoFieldsMessage = styled.div`
  line-height: 16px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;
  margin-top: 16px;
`;

const StyledInput = styled(Input)`
  flex-basis: calc(25% - 8px);
  margin-right: 8px;
`;

const StyledDropdown = styled(Dropdown)`
  flex-basis: calc(${({ small }) => (small ? "25" : "50")}% - 8px);
  margin-right: 8px;
`;

const getComponent = (type) => {
  if (type === "input") return StyledInput;
  if (type === "select") return StyledDropdown;
};

const RandomDumb = ({
  currentChart,
  createChart,
  handleSubmit,
  initialValues,
}) => {
  const {
    fields: { range: rangeFields, data: dataFields } = { range: [], data: [] },
    proTip = "",
  } = tabs[currentChart];
  console.log("initialValues", initialValues);
  return (
    <Root>
      <Form onSubmit={handleSubmit(createChart)}>
        {!isEmpty(dataFields) && (
          <FieldLine>
            {dataFields.map(({ name, type, label }) => (
              <Field
                name={name}
                component={getComponent(type)}
                label={label}
                key={name}
                type={type === "input" && "number"}
                options={type === "select" && dataDistributionTypes}
                small={name === "type"}
              />
            ))}
          </FieldLine>
        )}
        {!isEmpty(rangeFields) && (
          <FieldLine>
            {rangeFields.map(({ name, type, label }) => (
              <Field
                name={name}
                type={type === "input" && "number"}
                component={getComponent(type)}
                label={label}
                key={name}
              />
            ))}
          </FieldLine>
        )}
      </Form>
      {isEmpty(dataFields) && isEmpty(rangeFields) && (
        <NoFieldsMessage>{getNoFieldsMessage(currentChart)}</NoFieldsMessage>
      )}
      {proTip && <ProTip>Pro tip: {proTip}</ProTip>}
    </Root>
  );
};

const Random = R.compose(
  connect(R.applySpec({ currentChart: getCurrentChart, initialValues }), {
    createChart: createChartRequest,
  }),
  reduxForm({
    form: forms.RANDOM,
    enableReinitialize: true,
  })
)(RandomDumb);

export default Random;
