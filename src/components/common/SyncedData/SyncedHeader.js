import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { CloseButton, Link } from "@components/common";
import { isFigma } from "@app/utils";
import { syncDataTypes } from "@app/constants";

const Root = styled.div`
  position: relative;
  background: ${({ theme: { grey } }) => grey};
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding-left: 8px;
  color: ${({ theme: { black } }) => black};
`;

const StyledLink = styled(Link)`
  margin-left: 5px;
  text-overflow: ellipsis;
  max-width: ${isFigma ? "240" : "270"}px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
`;

const Title = styled.span`
  margin-left: 5px;
  text-overflow: ellipsis;
  max-width: ${isFigma ? "240" : "270"}px;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme: { black } }) => black};
  font-size: 14px;
`;

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: ${isFigma ? "9" : "3"}px;
  right: ${isFigma ? "8" : "4"}px;
  width: 8.5px;
  hight: 8.5px;
`;

const sourceTypes = {
  [syncDataTypes.API]: "Synced with API:",
  [syncDataTypes.GS]: "Synced with GS:",
  [syncDataTypes.CSV]: "Uploaded CSV:",
  [syncDataTypes.JSON]: "Uploaded JSON:",
};

const SyncedHeader = ({ onClose, type, source: { title, url } }) => (
  <Root>
    {onClose && <StyledCloseButton onClick={onClose} />}
    {sourceTypes[type]}
    {type === syncDataTypes.GS || type === syncDataTypes.API ? (
      <StyledLink href={url}>{title}</StyledLink>
    ) : (
      <Title>{title}</Title>
    )}
  </Root>
);

export default SyncedHeader;
