import React from 'react'
import { C } from './card.style'

const Card = ({ data }) => {
  return (
    <C.Card>
      <C.Poster>
        <C.Image src={data.entry.images.jpg.image_url} />
        <C.InfoL>
          <C.BtnL>SUB</C.BtnL> <C.BtnL>DUB</C.BtnL>
        </C.InfoL>
        <C.InfoR>
          <C.BtnR>Ep {data.episodes[0].mal_id}</C.BtnR>
        </C.InfoR>
      </C.Poster>
      <C.Details>
        <C.Name>{data.entry.title}</C.Name>
      </C.Details>
    </C.Card>
  )
}

export default Card
