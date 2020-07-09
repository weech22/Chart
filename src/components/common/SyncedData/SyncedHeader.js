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
`;

const Title = styled.span`
  margin-left: 5px;
  text-overflow: ellipsis;
  max-width: ${isFigma ? "240" : "270"}px;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme: { black } }) => black};
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

const SyncedHeader = ({ onClose, type, source: { title, url } }) => (
  <Root>
    {onClose && <StyledCloseButton onClick={onClose} />}
    {sourceTypes[type]}
    {type === syncDataTypes.GS || type === syncDataTypes.API ? (
      <StyledLink>{title}</StyledLink>
    ) : (
      <Title>{title}</Title>
    )}
  </Root>
);

export default SyncedHeader;
