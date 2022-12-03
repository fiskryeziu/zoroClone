import React from 'react'
import Card from '../Card/Card'
import GenreCard from '../GenreCard/GenreCard'
import { M } from './maincontainer.style'

const MainContainer = () => {
  return (
    <M.MainWrapper>
      <M.Main>
        <M.Heading>Latest Episode</M.Heading>
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
      <M.Aside>
        <M.Heading>Genres</M.Heading>
        <GenreCard />
      </M.Aside>
    </M.MainWrapper>
  )
}

export default MainContainer
