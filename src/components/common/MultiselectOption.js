import React, { useCallback, useEffect } from "react";
import styled from "styled-components";

import { isFigma } from "../../utils";
import assets from "../../assets";
import Link from "../common/Link";

const Root = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  line-height: 16px;
  font-size: 14px;
  margin-left: 8px;
`;

const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #000;

  outline: none;
  cursor: pointer;
  background-color: ${({ theme: { grey } }) => grey};
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ checked, someChecked }) =>
    someChecked
      ? `url(${assets.icons.minus})`
      : checked
      ? `url(${assets.icons.tick})`
      : "none"};
`;

export default ({ className, checked, onCheck, children, someChecked }) => {
  return (
    <Root className={className}>
      <Checkbox
        checked={checked}
        onClick={() => onCheck(children)}
        someChecked={someChecked}
      />
      <Label>{children}</Label>
    </Root>
  );
};
