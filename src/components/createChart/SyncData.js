import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";
import { Field, reduxForm } from "redux-form";

import { forms, links } from "@app/constants";
import { isFigma, isAdobe } from "@app/utils";
import { Title, Button, Input, Link, Dropdown } from "@components/common";
import {
  getIsSyncGSShowing,
  getIsSyncAPIShowing,
  stopSyncAPI,
  stopSyncGS,
  getGSSheets,
  syncGSRequest,
  syncAPIRequest,
  getIsSyncing,
  getIsSyncLinkValid,
} from "@modules/createChart";

const Root = styled.div`
  background: ${({ theme: { white } }) => white};
  box-sizing: ${isFigma ? "border-box" : "auto"};
  padding: ${isAdobe ? "16px 0px 0 16px" : "16px 16px 0 16px"};
  height: 400px;
  flex-basis: ${isAdobe ? "100%" : "auto"};
  width: ${isFigma ? "496px" : "auto"};
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  width: ${isAdobe ? "calc(100% - 16px)" : "100%"};
  margin: 4px 0 16px 0;
`;

const StyledDropdown = styled(Dropdown)`
  margin-top: 8px;
  width: 232px;
  margin-bottom: 16px;
`;

const StyledTitle = styled(Title)`
  padding: ${isAdobe ? "0 8px 0 0" : "0"};
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
`;

const LabelLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${isAdobe ? "calc(100% - 16px)" : "100%"};
  margin-top: 16px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
`;

const Label = styled.span`
  font-size: 12px;
  color: ${({ theme: { black } }) => black};
`;

const InvalidData = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 16px;
`;

// TODO: Create lres module for this + Create a config and then derive these values from there
const gsTitle = "Sync with Google Sheet";
const apiTitle = "Sync with HTTPS API";

const gsExampleLink = links.GS_EXAMPLE;
const apiExampleLink = links.API_EXAMPLE;

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
  isSyncing,
  isSyncLinkValid,
}) => {
  const closeModal = isSyncGSShowing ? stopSyncGS : stopSyncAPI;
  const title = isSyncGSShowing ? gsTitle : apiTitle;
  const fieldName = isSyncGSShowing ? "syncGS" : "syncAPI";
  const buttonHandler = isSyncGSShowing ? syncGS : syncAPI;
  const label = isSyncGSShowing ? gsLabel : apiLabel;
  const exampleLink = isSyncGSShowing ? gsExampleLink : apiExampleLink;

  const buttonCaption = isSyncing
    ? "Syncing..."
    : isSyncAPIShowing
    ? apiButtonCaption
    : !R.isEmpty(gsSheets)
    ? gsImportButtonCaption
    : gsButtonCaption;

  return (
    <Root>
      <StyledTitle onClose={closeModal}>{title}</StyledTitle>
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
          name="gsSheetId"
          component={StyledDropdown}
          options={gsSheets}
          label="Select sheet"
        />
      )}

      <StyledButton onClick={handleSubmit(buttonHandler)} isLoading={isSyncing}>
        {buttonCaption}
      </StyledButton>

      {!isSyncLinkValid && (
        <InvalidData>
          Link is not valid. <Link>Check an example</Link>
        </InvalidData>
      )}
    </Root>
  );
};

const SyncData = R.compose(
  connect(
    R.applySpec({
      isSyncAPIShowing: getIsSyncAPIShowing,
      isSyncGSShowing: getIsSyncGSShowing,
      isSyncing: getIsSyncing,
      gsSheets: getGSSheets,
      isSyncLinkValid: getIsSyncLinkValid,
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
