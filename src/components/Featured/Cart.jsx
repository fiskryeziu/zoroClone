import React from 'react'
import { F } from './featured.style'
import { FaChevronRight } from 'react-icons/fa'
import CartItem from './CartItem'

const Cart = ({ name, data }) => {
  return (
    <F.Cart>
      <F.CartBox>
        <F.CartTitle> {name}</F.CartTitle>
        <F.CartList>
          {data.map((item, idx) => (
            <CartItem key={idx} data={item} />
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
