import styled from 'styled-components'

export const G = {}

G.Card = styled.div`
  padding: 15px;
  background: #2a2c31;
  display: inline-block;
  width: 100%;
  position: relative;
`

G.List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
`
G.Item = styled.li`
  width: 31.33%;
  font-size: 12px;
  padding: 0.6em 0.4em;
  border-radius: 3px;
  text-overflow: ellipsis;
  font-weight: 500;
  cursor: pointer;
  &:nth-of-type(7n + 1) {
    color: #d0e6a5;
  }
  &:nth-of-type(7n + 2) {
    color: #ffdd95;
  }
  &:nth-of-type(7n + 3) {
    color: #fc887b;
  }
  &:nth-of-type(7n + 4) {
    color: #ccabda;
  }
  &:nth-of-type(7n + 5) {
    color: #abccd8;
  }
  &:nth-of-type(7n + 6) {
    color: #d8b2ab;
  }
  &:nth-of-type(7n) {
    color: #86e3ce;
  }

  &:hover {
    background: #414248;
  }
`
