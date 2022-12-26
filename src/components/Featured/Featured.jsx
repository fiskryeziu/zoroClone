import React from 'react'
import Card from './Card'
import { F } from './featured.style'
import { airing, mostfavorite, mostpopular, upcoming } from './data'

const Featured = () => {
  return (
    <F.Container>
      <Card name="Top Airing" data={airing} />
      <Card name="Most Popular" data={mostpopular} />
      <Card name="Most Favorite" data={mostfavorite} />
      <Card name="Upcoming" data={upcoming} />
    </F.Container>
  )
}

export default Featured
