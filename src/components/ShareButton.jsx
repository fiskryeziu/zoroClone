import React from 'react'
import styled from 'styled-components'

const ShareBtn = styled.div`
  position: relative;
  padding: 20px 20px;
  background-color: #121315;
  border-radius: ${({ borderRadius }) => (borderRadius ? '10px' : '0px')};
  color: #cae962;
  font-size: 14px;

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 40px;
    background-color: #cae962;
  }
`
const ShareButton = ({ borderRadius = true }) => {
  return (
    <ShareBtn borderRadius={borderRadius}>
      <div style={{ marginLeft: '20px' }}>
        <p>Share Zoro</p>
        <span style={{ color: '#ccc' }}> to your friends</span>
      </div>
    </ShareBtn>
  )
}

export default ShareButton
