import React from "react";
import styled from "styled-components";

import { Button, Dropdown, Link } from "../common";
import { isFigma } from "../../utils";

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

// TODO: template list
const Footer = () => (
  <Root>
    <Dropdown />
    <ButtonBlock>
      <StyledLink>Support</StyledLink>
      <StyledButton>Create chart</StyledButton>
    </ButtonBlock>
  </Root>
);

/* const Title = connect(R.applySpec({ currentChart: getCurrentChart }))(
  TitleDumb
); */

export default Footer;
