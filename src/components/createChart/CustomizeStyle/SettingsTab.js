import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";
import { Field, reduxForm, Form } from "redux-form";

import { getCurrentChart, useThisStyleRequest } from "@modules/createChart";
import { customizeStyleConfig } from "@config";
import { forms, componentTypes } from "@app/constants";
import { Dropdown, Input, ColorInput } from "@components/common";

const Root = styled.div`
  padding-top: 32px;
  display: flex;
  flex-wrap: wrap;

  margin-right: -8px;
  margin-bottom: -24px;
`;

const FieldContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-basis: calc(50% - 8px);
  margin-right: 8px;
`;

const StyledInput = styled(Input)``;

const StyledDropdown = styled(Dropdown)``;

const StyledColorInput = styled(ColorInput)``;

// TODO: Reuse from utils
const getComponent = (type) => {
  switch (type) {
    case componentTypes.NUM:
    case componentTypes.STRING:
      return StyledInput;
    case componentTypes.SELECT:
      return StyledDropdown;
    case componentTypes.COLOR:
      return StyledColorInput;
    default:
      return "input";
  }
};

const SettingsTabDumb = ({
  currentChart,
  tab,
  useThisStyleRequest,
  handleSubmit,
}) => {
  const fields = customizeStyleConfig[currentChart][tab];

  return (
    <Form onSubmit={handleSubmit(useThisStyleRequest)}>
      <Root>
        {!!fields &&
          !R.isEmpty(fields) &&
          fields.map(({ name, label, type, options, defaultValue }) => (
            <FieldContainer key={`${currentChart}_${tab}_${name}`}>
              <Field
                name={`${currentChart}_${tab}_${name}`}
                type={type}
                label={label}
                defaultValue={defaultValue}
                component={getComponent(type)}
                options={options}
              />
            </FieldContainer>
          ))}
      </Root>
    </Form>
  );
};

const SettingsTab = R.compose(
  connect(R.applySpec({ currentChart: getCurrentChart }), {
    useThisStyleRequest,
  }),
  reduxForm({
    form: forms.CUSTOM_STYLE,
    enableReinitialize: true,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })
)(SettingsTabDumb);

export default SettingsTab;
