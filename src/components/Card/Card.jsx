import React from 'react'
import poster from '../../assets/images/narutoposter.jpg'
import { C } from './card.style'

const Card = () => {
  return (
    <C.Card>
      <C.Poster>
        <C.Image src={poster} alt="" />
        <C.InfoL>
          <C.BtnL>SUB</C.BtnL> <C.BtnL>DUB</C.BtnL>
        </C.InfoL>
        <C.InfoR>
          <C.BtnR>Ep 10/10</C.BtnR>
        </C.InfoR>
      </C.Poster>
      <C.Details>
        <C.Name>Naruto Shipuden</C.Name>
        <p>TV • 24m</p>
      </C.Details>
    </C.Card>
  )
}

export default Card
