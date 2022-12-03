import React from 'react'
import Card from '../Card/Card'
import { M } from './maincontainer.style'

const MainContainer = () => {
  return (
    <M.MainWrapper>
      <M.Main>
        <M.MovieList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </M.MovieList>
      </M.Main>
      <M.Aside>aside</M.Aside>
    </M.MainWrapper>
  )
}

export default MainContainer
