import React, { useCallback } from "react";
import styled from "styled-components";

import assets from "@assets";
import { rgbToHex, numToPercent } from "@app/utils";

const ColorSample = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${({ color: { r, g, b, a } }) =>
    `rgba(${r},${g},${b},${a})`};
  border-radius: 4px;
`;

const HexColor = styled.span`
  margin-left: 8px;
`;

const Root = styled.div`
  display: flex;
  height: 24px;
  border-radius: 4px;
  padding-right: 8px;
  width: 184px;
  background: ${({ theme: { grey } }) => grey};
  align-items: center;
  cursor: pointer;
`;

const InfoBlock = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Opacity = styled.span`
  ${Root}:hover & {
    display: none;
  }
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

  return (
    <Root className={className} onClick={onClick}>
      <ColorSample color={color} />
      <InfoBlock>
        <HexColor>{rgbToHex(color.r, color.g, color.b)}</HexColor>
        <Opacity>{numToPercent(color.a)}</Opacity>
        <ControlBlock>
          <Button image={assets.icons.smallArrowUp} onClick={handleMoveUp} />
          <StyledButton
            image={assets.icons.smallArrowDown}
            onClick={handleMoveDown}
          />
          <Button image={assets.icons.minus} onClick={handleRemove} />
        </ControlBlock>
      </InfoBlock>
    </Root>
  );
};

export default ColorItem;
