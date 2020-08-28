// TODO: Scrap this garbage and make a new table.

import React, { Component, useEffect, useState, memo } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
// import { AutoSizer } from 'react-virtualized'
import * as R from 'ramda'

// import ReactDataSheet from 'react-datasheet'
import {
  getTableGrid,
  clearTable,
  transposeTable,
  updateTable,
  getTableSize,
} from '@modules/createChart'
import './react-datasheet.css'

const Container = styled.div`
  width: 374px;
  height: 212px;
  overflow: scroll;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
`

const Scroller = styled.div`
  height: 100%;
`

const SpreadsheetDumb = ({ updateTable, tableGrid, tableSize }) => {
  const handler = (changes) => {
    const newGrid = tableGrid.map((row) => [...row])

    changes.forEach(({ _, row, col, value }) => {
      newGrid[row][col] = { value }
    })

    updateTable(newGrid)
  }

  const renderCell = ({ children, row, col, className, ...props }) => {
    const { cols: maxCol, rows: maxRow } = tableSize

    const isLeftMost = col === 0
    const isRightMost = col === maxCol
    const isTopMost = row === 0

    const newClassName = `${className ? className : ''} ${
      isLeftMost ? 'left-most' : ''
    } ${isRightMost ? 'right-most' : ''} ${isTopMost ? 'top-most' : ''}`

    return (
      <td {...props} className={newClassName} key={`${row};${col}`}>
        {children}
      </td>
    )
  }

  return (
    <Container>
      <Scroller>
        {/*     <ReactDataSheet
          cellRenderer={renderCell}
          data={tableGrid}
          valueRenderer={(cell) => cell.value}
          onCellsChanged={handler}
        /> */}
      </Scroller>
    </Container>
  )
}

const Spreadsheet = connect(
  R.applySpec({ tableGrid: getTableGrid, tableSize: getTableSize }),
  {
    clearTable,
    transposeTable,
    updateTable,
  }
)(SpreadsheetDumb)

export default Spreadsheet
