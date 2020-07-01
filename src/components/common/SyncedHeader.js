import React from "react";
import styled from "styled-components";
import { submit } from "redux-form";
import { connect } from "react-redux";

import { CloseButton, Link } from "../common";
import { isFigma } from "../../utils";
import { forms, syncDataTypes } from "../../constants";

const Root = styled.div`
  position: relative;
  background: ${({ theme: { grey } }) => grey};
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding-left: 8px;
`;

const StyledLink = styled(Link)`
  margin-left: 5px;
  text-overflow: ellipsis;
  max-width: ${isFigma ? "240" : "270"}px;
  overflow: hidden;
  white-space: nowrap;
`;

const Title = styled.span`
  margin-left: 5px;
  text-overflow: ellipsis;
  max-width: ${isFigma ? "240" : "270"}px;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: ${isFigma ? "10" : "4"}px;
  right: 12px;
  width: 8px;
  hight: 8px;
`;

const sourceTypes = {
  [syncDataTypes.API]: "Synced with API:",
  [syncDataTypes.GS]: "Synced with GS:",
  [syncDataTypes.CSV]: "Uploaded CSV:",
  [syncDataTypes.JSON]: "Uploaded JSON:",
};

const SyncedHeaderDumb = ({
  onClose,
  type,
  source: { title, url },
  discardable,
}) => (
  <Root>
    {discardable && <StyledCloseButton onClick={onClose} />}
    {sourceTypes[type]}
    {type === syncDataTypes.GS || type === syncDataTypes.API ? (
      <StyledLink>{title}</StyledLink>
    ) : (
      <Title>{title}</Title>
    )}
  </Root>
);

const SyncedHeader = connect(null, {})(SyncedHeaderDumb);

export default SyncedHeader;
