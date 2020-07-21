import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import styled from "styled-components";
import * as R from "ramda";

import { isFigma, equalIgnoreOrder } from "@app/utils";

import Option from "./Option";

const Root = styled.div`
  border-radius: 4px;
  background: ${({ theme: { grey } }) => grey};
  position: relative;
  height: 176px;
  flex: 1;
  overflow-y: ${isFigma ? "scroll" : "auto"};
`;

const Options = styled.div`
  height: 128px;
  padding: 8px;
  margin-top: ${isFigma ? "32px" : "auto"};
`;

const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px;
  position: fixed;
  display: flex;
  flex: 1;
  background: ${({ theme: { grey } }) => grey};
  z-index: 100;
  width: 34%;
`;

const Label = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: -17px;
`;

const HeaderOption = styled(Option)`
  font-weight: bold;
`;

const StyledOption = styled(Option)`
  margin-bottom: 16px;
`;

const Div = styled.div`
  position: relative;
  display: flex;
  flex-basis: 50%;
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
    if (!R.isEmpty(value)) {
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
      !equalIgnoreOrder(options, checkedOptions) && !R.isEmpty(checkedOptions),
    [options, checkedOptions]
  );

  const isOptionChecked = (option) => checkedOptions.includes(option);

  return (
    <Div>
      {isFigma && <Label>{label}</Label>}
      <Root className={className}>
        {!isFigma && <Label>{label}</Label>}
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
    </Div>
  );
};
