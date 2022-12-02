import React from 'react'
import { F } from './featured.style'
import { FaChevronRight } from 'react-icons/fa'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <F.Cart>
      <F.CartBox>
        <F.CartTitle>Top Airing</F.CartTitle>
        <F.CartList>
          {[1, 2, 3, 4].map((item, idx) => (
            <CartItem key={idx} />
          ))}
        </F.CartList>
        <F.MoreLink>
          View more <FaChevronRight />
        </F.MoreLink>
      </F.CartBox>
    </F.Cart>
  )
}

export default Cart
