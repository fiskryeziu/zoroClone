import React from 'react'
import Cart from './Cart'
import { F } from './featured.style'
import { airing, mostfavorite, mostpopular, upcoming } from './data'

const Featured = () => {
  return (
    <F.Container>
      <Cart name="Top Airing" data={airing} />
      <Cart name="Most Popular" data={mostpopular} />
      <Cart name="Most Favorite" data={mostfavorite} />
      <Cart name="Upcoming" data={upcoming} />
    </F.Container>
  )
}

export default Featured
