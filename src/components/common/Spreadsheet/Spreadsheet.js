import React, { memo } from "react";
import ReactDataSheet from "react-datasheet";
import DataCell from "react-datasheet/lib/DataCell";
import { MultiGrid, AutoSizer } from "react-virtualized";
import styled from "styled-components";
import { connect } from "react-redux";
import * as R from "ramda";

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
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Scroller = styled.div`
  height: 100%;
`;

const sampleData = [...Array(1000)].map((_, i) =>
  [...Array(1000)].map((_, j) => ({ value: i + "," + j }))
);

class DataSheet extends ReactDataSheet {
  _setState(state) {
    super._setState(state);

    this.grid.forceUpdateGrids();
  }

  render() {
    const {
      attributesRenderer,
      cellRenderer,
      valueRenderer,
      dataRenderer,
      valueViewer,
      dataEditor,
      data,
    } = this.props;
    console.log("this", this);
    return (
      <Container
        ref={(r) => {
          this.dgDom = r;
        }}
        fixedColumnCount={100}
        fixedRowCount={100}
        tabIndex="0"
        className="data-grid-container"
        onKeyDown={
          console.log("this.handleKey", this.handleKey) ||
          this.handleKey.bind(this)
        }
      >
        <AutoSizer>
          {({ width: sheetWidth, height: sheetHeight }) => (
            <div className="data-grid">
              <MultiGrid
                ref={(ref) => {
                  this.grid = ref;
                }}
                cellRenderer={({ key, rowIndex, columnIndex, style }) => {
                  return (
                    <div key={key} style={style}>
                      <DataCell
                        row={rowIndex}
                        col={columnIndex}
                        cell={data[rowIndex][columnIndex]}
                        forceEdit={this.state.forceEdit}
                        onMouseDown={this.onMouseDown}
                        onMouseOver={this.onMouseOver}
                        onDoubleClick={this.onDoubleClick}
                        onContextMenu={this.onContextMenu}
                        onChange={this.onChange}
                        onRevert={this.onRevert}
                        onNavigate={this.handleKeyboardCellMovement}
                        onKey={
                          console.log("this.handleKey", this.handleKey) ||
                          this.handleKey
                        }
                        selected={this.isSelected(rowIndex, columnIndex)}
                        editing={this.isEditing(rowIndex, columnIndex)}
                        clearing={this.isClearing(rowIndex, columnIndex)}
                        attributesRenderer={attributesRenderer}
                        cellRenderer={cellRenderer}
                        valueRenderer={valueRenderer}
                        dataRenderer={dataRenderer}
                        valueViewer={valueViewer}
                        /* dataEditor={
                            console.log("dataEditor", dataEditor) || dataEditor
                          } */
                        onEdit={(a) => {
                          console.log("onEdit", a);
                        }}
                      />
                    </div>
                  );
                }}
                columnWidth={89}
                columnCount={data[0].length}
                height={sheetHeight}
                rowHeight={26}
                rowCount={data.length}
                width={sheetWidth}
                hideTopRightGridScrollbar
                hideBottomLeftGridScrollbar
              />
            </div>
          )}
        </AutoSizer>
      </Container>
    );
  }
}

/* const SpreadsheetDumb = memo(({ updateTable, tableGrid, tableSize }) => { */
class Spreadsheet extends React.PureComponent {
  /*   renderCell = ({ children, row, col, className, ...props }) => {
    //const { cols: maxCol, rows: maxRow } = tableSize;

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
  }; */
  /* 
  const handler = (changes) => {
    const newGrid = tableGrid.map((row) => [...row]);

    changes.forEach(({ _, row, col, value }) => {
      newGrid[row][col] = { value };
    });

    updateTable(newGrid);
  }; */
  state = {
    data: sampleData.map((row) => [...row]),
  };
  render() {
    return (
      <div>
        <DataSheet
          data={this.state.data} // sampleData.map((row) => [...row])
          /* cellRenderer={this.renderCell} */
          valueRenderer={(cell) => cell.value}
          onCellsChanged={(changes) => {
            const data = this.state.data.map((row) => [...row]);
            changes.forEach(({ cell, row, col, value }) => {
              data[row][col] = { ...data[row][col], value };
            });
            this.setState({ data });
          }}
        />
      </div>
    );
  }
}

/* const Spreadsheet = connect(
  R.applySpec({ tableGrid: getTableGrid, tableSize: getTableSize }),
  {
    clearTable,
    transposeTable,
    updateTable,
  }
)(SpreadsheetDumb); */

export default Spreadsheet;
