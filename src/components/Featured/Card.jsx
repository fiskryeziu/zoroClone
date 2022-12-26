import React from 'react'
import { F } from './featured.style'
import { FaChevronRight } from 'react-icons/fa'
import CardItem from './CardItem'

const Card = ({ name, data }) => {
  return (
    <F.Card>
      <F.CardBox>
        <F.CardTitle> {name}</F.CardTitle>
        <F.CardList>
          {data.map((item, idx) => (
            <CardItem key={idx} data={item} />
          ))}
        </F.CardList>
        <F.MoreLink>
          View more <FaChevronRight />
        </F.MoreLink>
      </F.CardBox>
    </F.Card>
  )
}

export default Card
