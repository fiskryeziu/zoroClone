import React, { useState } from 'react'
import { M } from './main.style'
import logo from '../assets/images/logo.png'
import zoro from '../assets/images/zoro.png'
import { FaSearch, FaBars } from 'react-icons/fa'

const anime = [
  'Chainsaw Man',
  'One Piece',
  'Bleach: Thousand-Year Blood War Arc',
  'Naruto: Shippuden',
  'Blue Lock',
  'Bleach',
  'The Eminence in Shadow',
  'My Hero Academia Season 6',
  'Boruto: Naruto Next Generations',
  'Naruto',
]

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <M.Nav>
        <M.Ul isOpen={isOpen}>
          <M.Li>Home</M.Li>
          <M.Li>Movies</M.Li>
          <M.Li>Tv Series</M.Li>
          <M.Li>Most Popular</M.Li>
          <M.Li>Top Airing</M.Li>
        </M.Ul>
        <M.MenuOpen isOpen={isOpen} onClick={clickHandler}>
          <FaBars />
          <p>Menu</p>
        </M.MenuOpen>
      </M.Nav>
      <M.Banner>
        <M.Left>
          <M.Logo src={logo} />
          <M.Wrapper>
            <M.Input placeholder="Search anime..." />
            <div>
              <M.Button>
                <FaSearch />
              </M.Button>
            </div>
          </M.Wrapper>

          <M.textBox>
            <M.span>Top Search:</M.span>
            {anime.map((item, idx) => (
              <M.Text key={idx}>{item},</M.Text>
            ))}
          </M.textBox>
        </M.Left>
        <M.Right>
          <M.iconWrapper>
            <M.Icon src={zoro} alt="img" />
          </M.iconWrapper>
        </M.Right>
      </M.Banner>
    </>
  )
}

export default Main
