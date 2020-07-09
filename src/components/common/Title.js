import React from "react";
import styled from "styled-components";

import CloseButton from "./CloseButton";

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  z-index: 1;
  box-sizing: border-box;
`;

const StyledCloseButton = styled(CloseButton)`
  z-index: 2;
`;

// TODO: Add prop withLink
export default ({ children, className, onClose }) => (
  <Root className={className}>
    {children}
    {onClose && <StyledCloseButton onClick={onClose} />}
  </Root>
);
