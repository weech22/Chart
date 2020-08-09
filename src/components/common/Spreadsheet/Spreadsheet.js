import React, { Component, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { AutoSizer } from "react-virtualized";
import * as R from "ramda";

import ReactDataSheet from "react-datasheet";
import {
  getTableGrid,
  clearTable,
  transposeTable,
  updateTable,
  getTableSize,
} from "@modules/createChart";
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

const cellsAreEqual = (prevCell, nextCell) => {
  if (prevCell.children._owner.key !== nextCell.children._owner.key) {
    console.log("children._owner.key");
  }
  if (prevCell.col !== nextCell.col) {
    console.log("col");
  }
  if (prevCell.row !== nextCell.row) {
    console.log("row");
  }
  if (prevCell.children.props.value !== nextCell.children.props.value) {
    console.log("children.props.value");
  }

  if (prevCell.className !== nextCell.className) {
    console.log("className");
  }
  if (prevCell.cell.value !== nextCell.cell.value) {
    console.log("cell.value");
  }

  if (prevCell.selected !== nextCell.selected) {
    console.log("selected");
  }

  if (prevCell.editing !== nextCell.editing) {
    console.log("editing");
  }

  if (prevCell.updated !== nextCell.updated) {
    console.log("updated");
  }

  return (
    prevCell.children._owner.key === nextCell.children._owner.key &&
    prevCell.col === nextCell.col &&
    prevCell.row === nextCell.row &&
    prevCell.children.props.value === nextCell.children.props.value &&
    prevCell.className === nextCell.className &&
    prevCell.cell.value === nextCell.cell.value &&
    prevCell.selected === nextCell.selected &&
    prevCell.editing === nextCell.editing &&
    prevCell.updated === nextCell.updated
  );
};

const tablesAreEqual = (prevTable, nextTable) => {
  console.log("prevTable", prevTable);
  console.log("nextTable", nextTable);
  return false;
};

const SpreadsheetDumb = memo(({ updateTable, tableGrid, tableSize }) => {
  const handler = (changes) => {
    const newGrid = tableGrid.map((row) => [...row]);

    changes.forEach(({ _, row, col, value }) => {
      newGrid[row][col] = { value };
    });

    updateTable(newGrid);
  };

  const renderCell = memo(({ children, row, col, className, ...props }) => {
    console.log("render cell", console.log());
    const { cols: maxCol, rows: maxRow } = tableSize;

    const isLeftMost = col === 0;
    const isRightMost = col === maxCol;
    const isTopMost = row === 0;

    const newClassName = `${className ? className : ""} ${
      isLeftMost ? "left-most" : ""
    } ${isRightMost ? "right-most" : ""} ${isTopMost ? "top-most" : ""}`;

    return (
      <td {...props} className={newClassName} key={`${row};${col}`}>
        {children}
      </td>
    );
  }, cellsAreEqual);

  return (
    <Container>
      <Scroller>
        <ReactDataSheet
          cellRenderer={renderCell}
          data={tableGrid}
          valueRenderer={(cell) => cell.value}
          onCellsChanged={handler}
        />
      </Scroller>
    </Container>
  );
}, tablesAreEqual);

const Spreadsheet = connect(
  R.applySpec({ tableGrid: getTableGrid, tableSize: getTableSize }),
  {
    clearTable,
    transposeTable,
    updateTable,
  }
)(SpreadsheetDumb);

export default Spreadsheet;
