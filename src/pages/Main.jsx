import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { M } from './main.style'
import logo from '../assets/images/logo.png'
import zoro from '../assets/images/zoro.png'
import zorosmall from '../assets/images/zoro-small.jpeg'
import { FaSearch, FaBars, FaArrowCircleRight, FaComment } from 'react-icons/fa'
import ShareButton from '../components/ShareButton'
import { useAiring, usePopular } from '../hooks/useAnime'

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
  const { data } = useAiring()

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <M.Nav>
        <M.Ul isOpen={isOpen}>
          <M.Li>
            <Link to="/home" onClick={clickHandler}>
              Home
            </Link>
          </M.Li>
          <M.Li>
            <Link to="/movies" onClick={clickHandler}>
              Movies
            </Link>
          </M.Li>
          <M.Li>
            <Link to="/tv-series" onClick={clickHandler}>
              Tv Series
            </Link>
          </M.Li>
          <M.Li>
            <Link to="/most-popular" onClick={clickHandler}>
              Most Popular
            </Link>
          </M.Li>
          <M.Li>
            <Link to="/top-airing" onClick={clickHandler}>
              Top Airing
            </Link>
          </M.Li>
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
            {data?.data.slice(0, 10).map((item, idx) => (
              <M.Text key={idx}>
                {item.title_english === null ? item.title : item.title_english},
              </M.Text>
            ))}
          </M.textBox>
        </M.Left>
        <M.Right>
          <M.iconWrapper>
            <M.Icon src={zoro} alt="img" />
          </M.iconWrapper>
        </M.Right>
      </M.Banner>
      <M.Container>
        <M.Action to="/home">
          View Full Site <FaArrowCircleRight />
        </M.Action>

        <ShareButton />
        <M.BoxWrapper>
          <M.BoxLeft>
            <h1 style={{ color: '#fff', fontSize: '28px' }}>
              Zoro.to - The best site to watch anime online for Free
            </h1>
            <p>
              Do you know that according to Google, the monthly search volume
              for anime related topics is up to over 1 Billion times? Anime is
              famous worldwide and it is no wonder we've seen a sharp rise in
              the number of free anime streaming sites. <br></br> Just like free
              online movie streaming sites, anime watching sites are not created
              equally, some are better than the rest, so we've decided to build
              Zoro.to to be one of the best free anime streaming site for all
              anime fans on the world.
            </p>
            <p>
              Do you know that according to Google, the monthly search volume
              for anime related topics is up to over 1 Billion times? Anime is
              famous worldwide and it is no wonder we've seen a sharp rise in
              the number of free anime streaming sites. <br></br> Just like free
              online movie streaming sites, anime watching sites are not created
              equally, some are better than the rest, so we've decided to build
              Zoro.to to be one of the best free anime streaming site for all
              anime fans on the world.
            </p>
          </M.BoxLeft>
          <M.BoxRight>
            <M.Card>
              <M.CardInfo>
                <div style={{ display: 'flex', gap: '1em' }}>
                  <p>#General</p> <p>2 hours ago</p>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}
                >
                  <FaComment />
                  <p>44</p>
                </div>
              </M.CardInfo>
              <M.CardTitle>taco bell nacho fries are trash</M.CardTitle>
              <M.CardText>
                they dont taste that great ngl i like em but most of the time
                the fries are cold and its hard to enjoy
              </M.CardText>
              <M.CardProfile>
                <img
                  src={zorosmall}
                  alt=""
                  width={30}
                  height={30}
                  style={{ borderRadius: '50%' }}
                />
                <p>Zoro</p>
              </M.CardProfile>
            </M.Card>
          </M.BoxRight>
        </M.BoxWrapper>
        <M.Footer>
          <p>©2021 Zoro.to. All rights reserved.</p>
          <p>Mangareader - Read Manga Online For FREE</p>
        </M.Footer>
      </M.Container>
    </>
  )
}

export default Main
