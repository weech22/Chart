import React from "react";
import styled from "styled-components";

import { Button, Link } from "./";
import { isFigma } from "@app/utils";

const Root = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
`;

const StyledButton = styled(Button)`
  margin-left: 16px;
`;

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${isFigma ? "30" : "0"}px;
`;

const StyledLink = styled(Link)``;

const Footer = ({ controls: { mainButton, leftButton, rightButton } }) =>
  console.log(rightButton) || (
    <Root>
      {leftButton ? (
        <StyledLink onClick={leftButton.onClick}>
          {leftButton.caption}
        </StyledLink>
      ) : (
        <span />
      )}
      <ButtonBlock>
        {rightButton ? (
          <StyledLink onClick={rightButton.onClick} href={rightButton.href}>
            {rightButton.caption}
          </StyledLink>
        ) : (
          <span />
        )}
        {mainButton ? (
          <StyledButton onClick={mainButton.onClick}>
            {mainButton.caption}
          </StyledButton>
        ) : (
          <span />
        )}
      </ButtonBlock>
    </Root>
  );

export default Footer;
