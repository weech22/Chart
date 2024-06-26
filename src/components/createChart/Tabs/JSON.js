import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as R from 'ramda'

import { Link, SyncedData } from '@components/common'
import { isAdobe, isFigma } from '@app/utils'
import {
  startSyncAPI,
  getIsAPISynced,
  getIsJSONUploaded,
  uploadJSONRequest,
} from '@modules/createChart'

const StyledLink = styled(Link)`
  font-size: 12px;
`

const Root = styled.div`
  font-size: 12px;
  padding-top: 8px;
`

const InstructionsLine = styled.div`
  margin-bottom: 6px;
`

// TODO: text config
const JSONDumb = ({
  startSyncAPI,
  isAPISynced,
  isJSONUploaded,
  uploadJSON,
}) => {
  const handleClick = () => {
    document.getElementById('hiddenFileInput').click()
  }

  const handleUploadJSON = isAdobe ? uploadJSON : handleClick

  return (
    <Root>
      <InstructionsLine>
        <StyledLink onClick={startSyncAPI}>Sync with HTTPS API</StyledLink>
        {' or '}
        <StyledLink onClick={handleUploadJSON}>upload JSON</StyledLink>
        {isFigma && (
          <input
            accept='application/JSON'
            id='hiddenFileInput'
            style={{ display: 'none' }}
            type='file'
            onChange={(e) => uploadJSON(e.target.files)}
          />
        )}
      </InstructionsLine>
      {(isAPISynced || isJSONUploaded) && <SyncedData discardable />}
    </Root>
  )
}

const JSON = connect(
  R.applySpec({
    isAPISynced: getIsAPISynced,
    isJSONUploaded: getIsJSONUploaded,
  }),
  { startSyncAPI, uploadJSON: uploadJSONRequest }
)(JSONDumb)

export default JSON
