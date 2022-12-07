import React from 'react'
import { F } from './footer.style'
import {
  FaBars,
  FaDiscord,
  FaRedditAlien,
  FaSearch,
  FaTelegramPlane,
  FaTwitter,
  FaRandom,
  FaLanguage,
  FaComments,
  FaBell,
} from 'react-icons/fa'
import logo from '../../assets/images/logo.png'

const letters = [
  'All',
  '#',
  '0-9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
const Footer = () => {
  return (
    <F.Footer>
      <F.Top>
        <F.Logo>
          <F.LogoImg src={logo} alt="logo" />
        </F.Logo>
        <F.SocialIcons>
          <F.Item style={{ backgroundColor: '#6f85d5' }}>
            <FaDiscord />
          </F.Item>
          <F.Item style={{ backgroundColor: '#08c' }}>
            <FaTelegramPlane />
          </F.Item>
          <F.Item style={{ backgroundColor: '#ff3c1f' }}>
            <FaRedditAlien />
          </F.Item>
          <F.Item style={{ backgroundColor: '#1d9bf0' }}>
            <FaTwitter />
          </F.Item>
        </F.SocialIcons>
      </F.Top>
      <F.ListAz>
        <F.TextWrapper>
          <F.TextLeft>A-Z LIST</F.TextLeft>
          <F.TextRight>
            Searching anime order by alphabet name A to Z.
          </F.TextRight>
        </F.TextWrapper>
        <F.ButtonList>
          {letters.map((item, idx) => (
            <F.Button key={idx}>{item}</F.Button>
          ))}
        </F.ButtonList>
      </F.ListAz>
      <F.Links>
        <F.LinkItem>Terms of service</F.LinkItem>
        <F.LinkItem>DCMA</F.LinkItem>
        <F.LinkItem>Contact</F.LinkItem>
      </F.Links>
      <F.AboutTxt>
        Zoro does not store any files on our server, we only linked to the media
        which is hosted on 3rd party services.
      </F.AboutTxt>
      <F.CopyrightTxt>© Zoro.to</F.CopyrightTxt>
    </F.Footer>
  )
}

export default Footer
