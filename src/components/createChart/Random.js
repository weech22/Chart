import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

import { isEmpty } from "../../utils";
import { Field, reduxForm, Form } from "redux-form";
import { getCurrentChart, createChartRequest } from "../../modules/createChart";
import { tabs, forms, dataDistributionTypes } from "../../constants";
import Input from "../common/Input";
import Dropdown from "../common/Dropdown";

const initialValues = {
  min: 0,
  max: 100,
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

const RandomDumb = ({ currentChart, createChart, handleSubmit }) => {
  const {
    fields: { range: rangeFields, data: dataFields } = { range: [], data: [] },
    proTip = "",
  } = tabs[currentChart];

  return (
    <Root>
      <Form onSubmit={handleSubmit(createChart)}>
        {!isEmpty(dataFields) && (
          <FieldLine>
            {dataFields.map(
              ({ name, type, label, defaultValue, options = {} }) => (
                <Field
                  name={name}
                  component={getComponent(type)}
                  label={label}
                  key={name}
                  type={type}
                  options={options}
                  small={name === "type"}
                  defaultValue={defaultValue}
                />
              )
            )}
          </FieldLine>
        )}
        {!isEmpty(rangeFields) && (
          <FieldLine>
            {rangeFields.map(({ name, type, label, defaultValue }) => (
              <Field
                name={name}
                type={type}
                component={getComponent(type)}
                label={label}
                key={name}
                defaultValue={defaultValue}
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
  connect(R.applySpec({ currentChart: getCurrentChart }), {
    createChart: createChartRequest,
    initialValues: () => initialValues,
  }),
  reduxForm({
    form: forms.RANDOM,
    enableReinitialize: true,
  })
)(RandomDumb);

export default Random;
