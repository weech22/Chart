import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";
import { Field, reduxForm } from "redux-form";

import { forms } from "../../constants";
import { isFigma } from "../../utils";
import { Title } from "./";
import { CloseButton, Button, Input, Link, Dropdown } from "../";

import {
  getIsSyncGSShowing,
  getIsSyncAPIShowing,
  stopSyncAPI,
  stopSyncGS,
  getGSSheets,
  syncGSRequest,
  syncAPIRequest,
} from "../../modules/createChart";

const Root = styled.div`
  box-sizing: border-box;
  background: ${({ theme: { white } }) => white};
  padding: 0 16px;
  padding-top: 16px;
  height: 400px;
  flex-basis: 100%;
  width: ${isFigma ? "496px" : "auto"};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  right: 15px;
  top: 15px;
`;

const StyledInput = styled(Input)`
  width: 100%;
  margin-top: 4px;
  margin-bottom: 16px;
`;

const StyledDropdown = styled(Dropdown)`
  margin-top: 24px;
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
`;

const LabelLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
`;

const Label = styled.span`
  font-size: 12px;
  color: ${({ theme: { black } }) => black};
`;

const gsTitle = "Sync with Google Sheet";
const apiTitle = "Sync with HTTPS API";

const apiButtonCaption = "Sync with API";
const gsButtonCaption = "Sync with GS";
const gsImportButtonCaption = "Import data from GS";

const placeholder = "https://...";

const gsLabel = "Enter Google Sheets sharable link";
const apiLabel = "Enter HTTPS link that will return valid JSON";

const SyncDataDumb = ({
  isSyncGSShowing,
  isSyncAPIShowing,
  stopSyncAPI,
  stopSyncGS,
  syncGS,
  syncAPI,
  handleSubmit,
  gsSheets,
}) => {
  const closeModal = isSyncGSShowing ? stopSyncGS : stopSyncAPI;
  const title = isSyncGSShowing ? gsTitle : apiTitle;
  const fieldName = isSyncGSShowing ? "syncGS" : "syncAPI";
  const exampleLink = isSyncGSShowing ? "gs" : "api";
  const buttonHandler = isSyncGSShowing ? syncGS : syncAPI;
  const label = isSyncGSShowing ? gsLabel : apiLabel;
  const buttonCaption = isSyncAPIShowing
    ? apiButtonCaption
    : !R.isEmpty(gsSheets)
    ? gsImportButtonCaption
    : gsButtonCaption;

  return (
    <Root>
      <StyledCloseButton onClick={closeModal} />

      <Title>{title}</Title>
      <LabelLine>
        <Label>{label}</Label>
        <StyledLink>Try an example</StyledLink>
      </LabelLine>
      <Field
        name={fieldName}
        type="text"
        component={StyledInput}
        placeholder={placeholder}
      />

      {!R.isEmpty(gsSheets) && isSyncGSShowing && (
        <Field
          name="gsSheet"
          component={StyledDropdown}
          options={gsSheets}
          label="Select sheet"
        />
      )}

      <StyledButton onClick={handleSubmit(buttonHandler)}>
        {buttonCaption}
      </StyledButton>
    </Root>
  );
};

const SyncData = R.compose(
  connect(
    R.applySpec({
      isSyncAPIShowing: getIsSyncAPIShowing,
      isSyncGSShowing: getIsSyncGSShowing,
      gsSheets: getGSSheets,
    }),
    {
      stopSyncAPI,
      stopSyncGS,
      syncAPI: syncAPIRequest,
      syncGS: syncGSRequest,
    }
  ),
  reduxForm({
    form: forms.SYNC_DATA,
    enableReinitialize: true,
  })
)(SyncDataDumb);

export default SyncData;