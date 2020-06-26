import React from "react";
import styled from "styled-components";
import { submit } from "redux-form";
import { connect } from "react-redux";

import { Button, Link } from "../common";
import { isFigma } from "../../utils";
import { forms } from "../../constants";

const Root = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px 16px 16px 16px;
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

const FooterDumb = ({ submitCreateChartForm }) => (
  <Root>
    <StyledLink>Customize chart style</StyledLink>
    <ButtonBlock>
      <StyledLink>Support</StyledLink>
      <StyledButton onClick={submitCreateChartForm}>Create chart</StyledButton>
    </ButtonBlock>
  </Root>
);

const Footer = connect(null, {
  submitCreateChartForm: () => submit(forms.RANDOM),
})(FooterDumb);

export default Footer;
