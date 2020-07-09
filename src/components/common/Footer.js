import React from "react";
import styled from "styled-components";
import { submit } from "redux-form";
import { connect } from "react-redux";
import * as R from "ramda";

import { Button, Link } from "./";
import { isFigma } from "@app/utils";

const Root = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  align-items: center;
  justify-content: space-between;
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

const Footer = ({ controls: { mainButton, leftButton, rightButton } }) => (
  <Root>
    {leftButton ? (
      <StyledLink onClick={leftButton.onClick}>{leftButton.caption}</StyledLink>
    ) : (
      <span />
    )}
    <ButtonBlock>
      {rightButton ? (
        <StyledLink onClick={rightButton.onClick}>
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
/* 
const Footer = connect(null, {
  submitCreateChartForm: () => submit(forms.RANDOM),
  startCustomizeStyle,
})(FooterDumb); */

export default Footer;
