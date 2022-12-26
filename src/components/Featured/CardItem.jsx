import React from 'react'
import { F } from './featured.style'

const CardItem = ({ data }) => {
  return (
    <F.CardItem>
      <F.PosterDiv>
        <F.Img src={data.images.webp.image_url} />
      </F.PosterDiv>
      <F.DetailsWrapper>
        <F.Name>
          {data.title_english === null ? data.title : data.title_english}
        </F.Name>
        <F.Details>
          {data.type} • Ep {data.episodes == null ? '?' : data.episodes} •
          {data.duration === 'Unknown' ? '' : data.duration.slice(0, 2) + 'm'}
        </F.Details>
      </F.DetailsWrapper>
    </F.CardItem>
  )
}

export default CardItem
