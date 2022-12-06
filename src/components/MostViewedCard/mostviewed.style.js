import styled from 'styled-components'

export const M = {}

M.Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #3d3e44;
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

M.Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #2a2c31;
`
M.Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  gap: 1em;
`
M.ItemNumber = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #737682;
`
M.PosterImg = styled.img`
  width: 45px;
  height: 60px;
`
M.Detail = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
`
M.Name = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4em;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #fff;
`

M.View = styled.div`
  display: flex;
  gap: 1.5em;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
  color: #aaaaaa;
`
M.ViewNum = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  white-space: nowrap;
`

M.Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  white-space: nowrap;
`
