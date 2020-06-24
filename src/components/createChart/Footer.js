import React from "react";
import styled from "styled-components";

import { Button, Dropdown, Link } from "../common";

const Root = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 16px 16px 16px;
`;

const StyledLink = styled(Link)``;

// TODO: template list
const Footer = () => (
  <Root>
    <Dropdown />
    <StyledLink>Support</StyledLink>
    <Button>Create chart</Button>
  </Root>
);

/* const Title = connect(R.applySpec({ currentChart: getCurrentChart }))(
  TitleDumb
); */

export default Footer;
