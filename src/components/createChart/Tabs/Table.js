import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as R from 'ramda'

import { Link, Spreadsheet, SyncedData } from '@components/common'
import { isAdobe, isFigma } from '@app/utils'
import {
  startSyncGS,
  getIsGSSynced,
  getIsCSVUploaded,
  uploadCSVRequest,
  getSyncedData,
  clearTable,
  transposeTable,
} from '@modules/createChart'
import { links } from '@app/constants'

const Root = styled.div`
  padding-top: 8px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin-right: -1px;
`

const StyledLink = styled(Link)`
  font-size: 12px;
`

const InstructionsLine = styled.div`
  margin-bottom: 6px;
`

const TableFooter = styled.div`
  margin-top: -18px;
  margin-bottom: -8px;
  padding-top: 8px;
  background: white;
  z-index: 2;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
`

// TODO: text config
const TableDumb = ({
  startSyncGS,
  isGSSynced,
  isCSVUploaded,
  uploadCSV,
  syncedData,
  clearTable,
  transposeTable,
}) => {
  const handleClick = () => {
    document.getElementById('hiddenFileInput').click()
  }

  const handleUploadCSV = isAdobe ? uploadCSV : handleClick
  return (
    <Root>
      <InstructionsLine>
        {'Type or paste data into table. '}
        <StyledLink onClick={startSyncGS}>Sync with Google Sheet</StyledLink>
        {' or '}
        <StyledLink onClick={handleUploadCSV}>upload CSV</StyledLink>
        {isFigma && (
          <input
            accept='.csv'
            id='hiddenFileInput'
            style={{ display: 'none' }}
            type='file'
            onChange={(e) => uploadCSV(e.target.files)}
          />
        )}
      </InstructionsLine>
      {(isGSSynced || isCSVUploaded) && <SyncedData discardable />}
      {!isAdobe && !isGSSynced && !isCSVUploaded && (
        <Fragment>
          <Spreadsheet />
          <TableFooter>
            <StyledLink href={links.TABLE_HOW_TO}>
              How to use Table data?
            </StyledLink>
            <Controls>
              <StyledLink onClick={transposeTable}>Transpose</StyledLink>
              <StyledLink onClick={clearTable}>Clear table</StyledLink>
            </Controls>
          </TableFooter>
        </Fragment>
      )}
    </Root>
  )
}

const Table = connect(
  R.applySpec({ isGSSynced: getIsGSSynced, isCSVUploaded: getIsCSVUploaded }),
  {
    startSyncGS,
    uploadCSV: uploadCSVRequest,
    syncedData: getSyncedData,
    clearTable,
    transposeTable,
  }
)(TableDumb)

export default Table
