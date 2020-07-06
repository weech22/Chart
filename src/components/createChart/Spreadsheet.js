import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";

import ReactDataSheet from "react-datasheet";
import "./react-datasheet.css";

const Container = styled.div`
  width: 374px;
  height: 212px;
  overflow: scroll;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
`;

const Scroller = styled.div`
  height: 100%;
`;

const defaultGrid = [
  [
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 3 },
  ],
  [
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 3 },
  ],
  [
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
  ],
  [
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 3 },
  ],
  [
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
  ],
  [
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
  ],
  [
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
  ],
  [
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
  ],
  [
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
  ],
  [
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
    { value: 2 },
    { value: 4 },
    { value: 1 },
    { value: 3 },
    { value: 1 },
    { value: 3 },
  ],
];

const Spreadsheet = () => {
  const [grid, setGrid] = useState(defaultGrid);

  const handler = (changes) => {
    const grid = grid.map((row) => [...row]);

    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });

    setGrid(grid);
  };

  return (
    <Container>
      <Scroller>
        <ReactDataSheet
          data={grid}
          valueRenderer={(cell) => cell.value}
          onCellsChanged={handler}
        />
      </Scroller>
    </Container>
  );
};

export default Spreadsheet;
