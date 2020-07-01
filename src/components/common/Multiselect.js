import React, { useCallback, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import * as R from "ramda";

import { isFigma, isEmpty, equalIgnoreOrder } from "../../utils";
import assets from "../../assets";
import Link from "../common/Link";
import MultiselectOption from "./MultiselectOption";

const Root = styled.div`
  border-radius: 4px;
  background: ${({ theme: { grey } }) => grey};
  position: relative;
`;

const Options = styled.div`
  overflow-y: scroll;
  height: ${isFigma ? "164" : "133"}px;
  padding: 8px;
`;

const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px;
`;

const Label = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: -17px;
`;

const HeaderOption = styled(MultiselectOption)`
  font-weight: bold;
`;

const StyledOption = styled(MultiselectOption)`
  margin-bottom: 16px;
`;

export default ({ className, label, options, input: { onChange, value } }) => {
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleCheck = (option) => {
    if (!checkedOptions.includes(option)) {
      setCheckedOptions(R.append(option, checkedOptions));
    } else {
      setCheckedOptions(R.reject(R.equals(option), checkedOptions));
    }
  };

  useEffect(() => {
    if (!isEmpty(value)) {
      setCheckedOptions(value);
    }
  }, [value]);

  useEffect(() => {
    onChange(checkedOptions);
  }, [checkedOptions]);

  const checkAll = () => {
    if (equalIgnoreOrder(options, checkedOptions)) {
      setCheckedOptions([]);
    } else {
      setCheckedOptions(options);
    }
  };

  const allChecked = useMemo(() => equalIgnoreOrder(options, checkedOptions), [
    options,
    checkedOptions,
  ]);

  const someChecked = useMemo(
    () =>
      !equalIgnoreOrder(options, checkedOptions) && !isEmpty(checkedOptions),
    [options, checkedOptions]
  );

  const isOptionChecked = (option) => checkedOptions.includes(option);

  return (
    <Root className={className}>
      <Label>{label}</Label>
      <Header>
        <HeaderOption
          onCheck={checkAll}
          checked={allChecked}
          someChecked={someChecked}
        >
          Select all
        </HeaderOption>
      </Header>
      <Options>
        {options.map((option) => (
          <StyledOption
            key={option}
            onCheck={handleCheck}
            checked={isOptionChecked(option)}
          >
            {option}
          </StyledOption>
        ))}
      </Options>
    </Root>
  );
};
