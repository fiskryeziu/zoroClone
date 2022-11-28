import React from 'react'
import { M } from '../../pages/main.style'
import MultiSwiper from '../MultiSwiper/MultiSwiper'
import { T } from './trending.style'
import gif from '../../assets/images/share-icon.gif'

const Trending = () => {
  return (
    <>
      <T.Container>
        <T.HeadingWrapper>
          <T.Heading>Trending</T.Heading>
        </T.HeadingWrapper>
        <MultiSwiper />
      </T.Container>
      <T.ShareBox>
        <T.Gif src={gif}></T.Gif>
        <div>
          <p>Share Zoro</p>
          <span style={{ color: '#ccc' }}> to your friends</span>
        </div>
      </T.ShareBox>
    </>
  )
}

export default Trending
