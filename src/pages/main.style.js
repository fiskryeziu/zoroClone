import styled from 'styled-components'
import img from '../assets/images/zoro-bg.jpg'

export const M = {}

M.Nav = styled.div`
  width: 100%;
  margin-top: 4em;
  padding-left: 5em;
`
M.Ul = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  height: 70px;
`
M.Li = styled.div`
  color: #fff;
`
M.Banner = styled.div`
  display: flex;
  background: url(${img});
  width: 100%;
  height: 80vh;
`
M.Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-left: 5em;
`
M.Logo = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
`
M.Input = styled.input`
  border-radius: 20px;
  border: none;
`
M.Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
`
M.Wrapper = styled.div`
  display: flex;
  gap: 2em;
`

M.Right = styled.div``
