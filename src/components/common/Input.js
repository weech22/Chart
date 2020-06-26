import React, { useMemo, useCallback } from "react";
import styled from "styled-components";
import { platform, isAdobe, isFigma } from "../../utils";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: relative;
  width: 88px;
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  background: ${({ theme: { grey } }) => grey};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { black } }) => black};
  outline: none;
  appearance: none;
  box-sizing: border-box;
  margin: 0;
  padding: 8px;
  height: 32px;
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
  input: { onChange },
  meta: { touched, error },
}) => {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      onChange(value);
    },
    [onChange]
  );

  const isError = useMemo(() => error && touched, [error, touched]);

  return (
    <Root className={className}>
      <Label>{label}</Label>
      <Input type={type} onChange={handleChange} isError={isError} />
    </Root>
  );
};
