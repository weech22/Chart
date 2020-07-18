import React, { useCallback } from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";

import assets from "@assets";
import { numToPercent } from "@app/utils";

const ColorSample = styled.span`
  width: ${({ isBig }) => (isBig ? "32" : "24")}px;
  height: ${({ isBig }) => (isBig ? "32" : "24")}px;
  flex-shrink: 0;
  background-color: ${({ color }) => `#${tinycolor(color).toHex()}`};
  border-radius: 4px;
`;

const HexColor = styled.span`
  margin-left: 8px;
  font-size: 12px;
`;

const Root = styled.div`
  display: flex;
  height: ${({ isBig }) => (isBig ? "32" : "24")}px;
  border-radius: 4px;
  padding-right: 8px;
  width: 100%;
  background: ${({ theme: { grey } }) => grey};
  align-items: center;
  cursor: pointer;
`;

const InfoBlock = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Opacity = styled.span`
  ${Root}:hover & {
    display: ${({ isInList }) => (isInList ? "none" : "block")};
  }
  font-size: 12px;
`;

const ControlBlock = styled.span`
  display: none;
  ${Root}:hover & {
    display: flex;
  }
  align-items: center;
`;

const Button = styled.span`
  width: 16px;
  height: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ image }) => image});
`;

const StyledButton = styled(Button)`
  margin: 0 12px 0 4px;
`;

const ColorItem = ({
  className,
  color,
  moveUp,
  moveDown,
  remove,
  index,
  onClick,
}) => {
  const handleMoveUp = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      moveUp(index);
    },
    [index]
  );

  const handleMoveDown = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      moveDown(index);
    },
    [index]
  );

  const handleRemove = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      remove(index);
    },
    [index]
  );

  const isInList = !!remove && !!moveDown && !!moveUp;

  return (
    <Root className={className} onClick={onClick} isBig={!isInList}>
      <ColorSample color={color} isBig={!isInList} />
      <InfoBlock>
        <HexColor>{tinycolor(color).toHex().toUpperCase()}</HexColor>
        <Opacity isInList={isInList}>{numToPercent(color.a)}</Opacity>
        {isInList && (
          <ControlBlock>
            <Button image={assets.icons.smallArrowUp} onClick={handleMoveUp} />
            <StyledButton
              image={assets.icons.smallArrowDown}
              onClick={handleMoveDown}
            />
            <Button image={assets.icons.minus} onClick={handleRemove} />
          </ControlBlock>
        )}
      </InfoBlock>
    </Root>
  );
};

export default ColorItem;
