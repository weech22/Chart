import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import * as R from "ramda";

import { isFigma } from "@app/utils";
import assets from "@app/assets";
import Link from "./Link";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
`;

const Select = styled.select`
  border-radius: 4px;
  width: 100%;
  height: 32px;
  appearance: none;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px);
  background-image: url(${assets.icons.arrowDown});
  text-indent: ${isFigma ? "8" : "0"}px;
  text-overflow: ellipsis;
  font-size: 14px;
`;

const Label = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  position: absolute;
  top: -17px;
`;

const Option = styled.option`
  font-size: 14px;
  padding: 8px;
  appearance: none;
  border: none;
  outline: none;
  background: ${({ theme: { grey } }) => grey};
`;

const StyledLink = styled(Link)`
  font-size: 12px;
`;

export default ({
  options = {},
  label,
  className,
  small,
  labelLink,
  input: { onChange, value },
  defaultValue,
}) => {
  const selectOptions = Object.keys(options).map((option) => ({
    value: options[option].value,
    label: options[option].label,
  }));

  useEffect(() => {
    if (R.isEmpty(value) || R.isNil(value)) {
      if (defaultValue) {
        onChange(defaultValue);
      } else if (options[0]) {
        onChange(options[0].value);
      }
    }
  });

  const handleChange = useCallback(
    ({ target: { value } }) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <Root className={className} small={small}>
      <Label>
        {label}
        {labelLink && (
          <StyledLink href="labelLink.action">{labelLink.label}</StyledLink>
        )}
      </Label>
      <Select onChange={handleChange} value={value}>
        {selectOptions.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </Root>
  );
};
