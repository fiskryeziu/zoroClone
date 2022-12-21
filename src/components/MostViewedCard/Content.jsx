import React from 'react'
import { M } from './mostviewed.style'
import poster from '../../assets/images/narutoposter.jpg'
import { FaEye, FaHeart } from 'react-icons/fa'
import { mostViewed } from './data'

const Content = ({ option }) => {
  const hideOpacity = (e) => {
    e.target.firstChild.style.opacity = '0'
  }
  const showOpacity = (e) => {
    e.target.firstChild.style.opacity = '1'
  }
  return (
    <M.Content>
      {option &&
        mostViewed[`${option}`].map((item, idx) => (
          <M.Item
            key={idx}
            id="item"
            onMouseLeave={showOpacity}
            onMouseEnter={hideOpacity}
          >
            <M.ItemNumber
              id={
                idx + 1 === 1 || idx + 1 === 2 || idx + 1 === 3 ? 'active' : ''
              }
            >
              {idx + 1 > 10 ? idx + 1 : `0${idx + 1}`}
            </M.ItemNumber>
            <M.PosterImg src={poster} />
            <M.Detail>
              <M.Name>{item.name}</M.Name>
              <M.View>
                <M.ViewNum>
                  <FaEye />
                  {item.watched.toLocaleString()}
                </M.ViewNum>
                <M.Likes>
                  <FaHeart />
                  {item.likes.toLocaleString()}
                </M.Likes>
              </M.View>
            </M.Detail>
          </M.Item>
        ))}
    </M.Content>
  )
}

export default Content
