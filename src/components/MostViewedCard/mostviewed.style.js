import styled from 'styled-components'

export const M = {}

M.Card = styled.div`
  background: #2a2c31;
  display: flex;
  flex-direction: column;
  position: relative;
`
M.Nav = styled.div`
  display: flex;
`
M.RadioBtn = styled.input`
  display: none;

  &:checked + label {
    background: #51535b;
    color: #cae962;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    padding: 1.4em 0.4em;
  }
`

M.Wrapper = styled.div`
  display: flex;
  width: 100%;
`
