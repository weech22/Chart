import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";
import { Field, reduxForm, Form } from "redux-form";

import { getCurrentChart, createChartRequest } from "@modules/createChart";
import {
  charts,
  forms,
  dataDistributionTypes,
  componentTypes,
} from "@app/constants";
import { Input, Dropdown } from "@components/common";

const validate = (values) => {
  const errors = {};

  if (values.min > values.max || values.max < values.min) {
    errors.min = true;
    errors.max = true;
  }
  return errors;
};

const Root = styled.div`
  margin-right: -8px;
`;

const FieldLine = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`;

const getNoFieldsMessage = (chartType) =>
  `${charts[chartType].title} doesn’t have any settings for random data :-)`;

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
  width: 88px;
`;

const StyledDropdown = styled(Dropdown)`
  flex-basis: calc(${({ small }) => (small ? "25" : "50")}% - 8px);
  margin-right: 8px;
`;

// TODO: Ruse from utils
const getComponent = (type) => {
  if (type === componentTypes.NUM) return StyledInput;
  if (type === componentTypes.SELECT) return StyledDropdown;
};

const RandomDumb = ({ currentChart, createChart, handleSubmit }) => {
  const {
    fields: { range: rangeFields, data: dataFields } = { range: [], data: [] },
    proTip = "",
  } = charts[currentChart];

  return (
    <Root>
      <Form onSubmit={handleSubmit(createChart)}>
        {!R.isEmpty(dataFields) && !R.isNil(dataFields) && (
          <FieldLine>
            {dataFields.map(
              ({ name, type, label, defaultValue, options = {} }) => (
                <Field
                  name={name}
                  component={getComponent(type)}
                  label={label}
                  key={`${currentChart}_${name}`}
                  type={type}
                  options={options}
                  small={name === "type"}
                  defaultValue={defaultValue}
                />
              )
            )}
          </FieldLine>
        )}
        {!R.isEmpty(rangeFields) && !R.isNil(rangeFields) && (
          <FieldLine>
            {rangeFields.map(({ name, type, label, defaultValue }) => (
              <Field
                name={name}
                type={type}
                component={getComponent(type)}
                label={label}
                key={`${currentChart}_${name}`}
                defaultValue={defaultValue}
              />
            ))}
          </FieldLine>
        )}
      </Form>
      {R.isEmpty(dataFields) && R.isEmpty(rangeFields) && (
        <NoFieldsMessage>{getNoFieldsMessage(currentChart)}</NoFieldsMessage>
      )}
      {proTip && <ProTip>Pro tip: {proTip}</ProTip>}
    </Root>
  );
};

const Random = R.compose(
  connect(R.applySpec({ currentChart: getCurrentChart }), {
    createChart: createChartRequest,
  }),
  reduxForm({
    form: forms.RANDOM,
    enableReinitialize: true,
    validate,
  })
)(RandomDumb);

export default Random;
