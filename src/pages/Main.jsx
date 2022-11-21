import React from 'react'
import { M } from './main.style'
import logo from '../assets/images/logo.png'

const Main = () => {
  return (
    <>
      <M.Nav>
        <M.Ul>
          <M.Li>Home</M.Li>
          <M.Li>Movies</M.Li>
          <M.Li>Tv Series</M.Li>
          <M.Li>Most Popular</M.Li>
          <M.Li>Top Airing</M.Li>
        </M.Ul>
      </M.Nav>
      <M.Banner>
        <M.Left>
          <M.Logo src={logo} />
          <M.Wrapper>
            <M.Input />
            <M.Button>Search</M.Button>
          </M.Wrapper>
        </M.Left>
        <M.Right></M.Right>
      </M.Banner>
    </>
  )
}

export default Main
