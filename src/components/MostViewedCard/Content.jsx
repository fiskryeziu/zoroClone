import React from 'react'
import { M } from './mostviewed.style'
import poster from '../../assets/images/narutoposter.jpg'
import { FaEye, FaHeart } from 'react-icons/fa'

const Content = () => {
  return (
    <M.Content>
      <M.Item>
        <M.ItemNumber id="active">01</M.ItemNumber>
        <M.PosterImg src={poster} />
        <M.Detail>
          <M.Name>Naruto Shipuden</M.Name>
          <M.View>
            <M.ViewNum>
              <FaEye />
              123499
            </M.ViewNum>
            <M.Likes>
              <FaHeart />
              10000
            </M.Likes>
          </M.View>
        </M.Detail>
      </M.Item>
      <M.Item>
        <M.ItemNumber id="active">02</M.ItemNumber>
        <M.PosterImg src={poster} />
        <M.Detail>
          <M.Name>Naruto Shipuden</M.Name>
          <M.View>
            <M.ViewNum>
              <FaEye />
              123499
            </M.ViewNum>
            <M.Likes>
              <FaHeart />
              10000
            </M.Likes>
          </M.View>
        </M.Detail>
      </M.Item>
      <M.Item>
        <M.ItemNumber id="active">03</M.ItemNumber>
        <M.PosterImg src={poster} />
        <M.Detail>
          <M.Name>Naruto Shipuden</M.Name>
          <M.View>
            <M.ViewNum>
              <FaEye />
              123499
            </M.ViewNum>
            <M.Likes>
              <FaHeart />
              10000
            </M.Likes>
          </M.View>
        </M.Detail>
      </M.Item>
      <M.Item>
        <M.ItemNumber>04</M.ItemNumber>
        <M.PosterImg src={poster} />
        <M.Detail>
          <M.Name>Naruto Shipuden</M.Name>
          <M.View>
            <M.ViewNum>
              <FaEye />
              123499
            </M.ViewNum>
            <M.Likes>
              <FaHeart />
              10000
            </M.Likes>
          </M.View>
        </M.Detail>
      </M.Item>
      <M.Item>
        <M.ItemNumber>05</M.ItemNumber>
        <M.PosterImg src={poster} />
        <M.Detail>
          <M.Name>Naruto Shipuden</M.Name>
          <M.View>
            <M.ViewNum>
              <FaEye />
              123499
            </M.ViewNum>
            <M.Likes>
              <FaHeart />
              10000
            </M.Likes>
          </M.View>
        </M.Detail>
      </M.Item>
    </M.Content>
  )
}

export default Content
