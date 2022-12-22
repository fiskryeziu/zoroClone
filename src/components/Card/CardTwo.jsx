import React from 'react'
import { C } from './card.style'

const CardTwo = ({ data }) => {
  return (
    <C.Card>
      <C.Poster>
        <C.Image src={data.images.jpg.image_url} />
        <C.InfoL>
          <C.BtnL>SUB</C.BtnL> <C.BtnL>DUB</C.BtnL>
        </C.InfoL>
        <C.InfoR>
          <C.BtnR>Ep {data.episodes}</C.BtnR>
        </C.InfoR>
      </C.Poster>
      <C.Details>
        <C.Name>{data.title}</C.Name>
        <C.MovieInfo>
          {data.type} • {data.duration}
        </C.MovieInfo>
      </C.Details>
    </C.Card>
  )
}

export default CardTwo
