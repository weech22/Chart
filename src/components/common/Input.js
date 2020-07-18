import React, { useMemo, useCallback, useEffect } from "react";
import styled from "styled-components";
import { platform, isAdobe, isFigma } from "../../utils";
import { componentTypes } from "@app/constants";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  appearance: none;
  height: 32px;
  border: ${({ isError }) => (isError ? "1px solid #E95454" : "none")};
  border-radius: 4px;
  background: ${({ theme: { grey } }) => grey};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { black } }) => black};
  outline: none;
  padding: 8px;
  margin: 0;
`;

const Label = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  position: absolute;
  top: -17px;
`;

export default ({
  className,
  label,
  type,
  input: { onChange, value },
  meta: { touched, error },
  defaultValue,
  placeholder,
}) => {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      onChange(value);
    },
    [value]
  );

  const handleFocus = (event) => event.target.select();

  useEffect(() => {
    onChange(defaultValue);
  }, []);

  const calculatedType = type === componentTypes.NUM ? "number" : "text";
  return (
    <Root className={className}>
      <Label>{label}</Label>
      <Input
        onFocus={handleFocus}
        placeholder={placeholder}
        type={calculatedType}
        onChange={handleChange}
        isError={error}
        value={value}
      />
    </Root>
  );
};
