import React from 'react'
import Card from '../Card/Card'
import GenreCard from '../GenreCard/GenreCard'
import MostViewedCard from '../MostViewedCard/MostViewedCard'
import TrendingPosts from '../TredingPosts/TrendingPosts'
import { M } from './maincontainer.style'

const MainContainer = () => {
  return (
    <M.MainWrapper>
      <M.Main>
        <M.Heading>Latest Episode</M.Heading>
        <M.MovieList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
            <Card key={idx} />
          ))}
        </M.MovieList>
        <M.Heading>New on Zoro</M.Heading>
        <M.MovieList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
            <Card key={idx} />
          ))}
        </M.MovieList>
      </M.Main>
      <M.Aside>
        <M.Heading>Genres</M.Heading>
        <GenreCard />
        <M.Heading>Most Viewed</M.Heading>
        <MostViewedCard />
        <M.Heading>Trending Posts</M.Heading>
        <TrendingPosts />
      </M.Aside>
    </M.MainWrapper>
  )
}

export default MainContainer
