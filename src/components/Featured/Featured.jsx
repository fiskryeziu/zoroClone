import React from 'react'
import Cart from './Cart'
import { F } from './featured.style'

const Featured = () => {
  return (
    <F.Container>
      {[1, 2, 3, 4].map((item, idx) => (
        <Cart key={idx} />
      ))}
    </F.Container>
  )
}

export default Featured
