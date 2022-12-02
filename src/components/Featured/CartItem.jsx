import React from 'react'
import { F } from './featured.style'
import img from '../../assets/images/onepiece.jpg'

const CartItem = () => {
  return (
    <F.CartItem>
      <F.PosterDiv>
        <F.Img src={img} />
      </F.PosterDiv>
      <F.DetailsWrapper>
        <F.Name>name 1</F.Name>
        <F.Details>TV • Ep 25/25 • 24m</F.Details>
      </F.DetailsWrapper>
    </F.CartItem>
  )
}

export default CartItem
