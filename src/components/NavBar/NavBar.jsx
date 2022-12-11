import React, { useEffect, useState } from 'react'
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
import { BsBroadcast } from 'react-icons/bs'
import { N } from './navbar.style'
import logo from '../../assets/images/logo.png'
import zorosmall from '../../assets/images/zoro-small.jpeg'
import SideBar from './SideBar'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [fixed, setFixed] = useState(null)

  const location = useLocation()
  const locationPath = location.pathname.slice(1)
  useEffect(() => {
    if (open) {
      document.body.classList.add('body-hidden')
    } else {
      document.body.classList.remove('body-hidden')
    }

    window.addEventListener('scroll', () => {
      if (scrollY == '0') {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    })
    window.addEventListener('load', () => {
      if (scrollY == '0') {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    })
  }, [open, isScrolled])

  useEffect(() => {
    if (locationPath === 'home') {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }, [locationPath])
  return (
    <N.Nav isScrolled={isScrolled} fixed={fixed}>
      {/* background layout   */}
      <N.LayoutBg open={open} onClick={() => setOpen(false)}></N.LayoutBg>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
        <FaBars
          size={24}
          color="#fff"
          style={{ cursor: 'pointer' }}
          onClick={() => setOpen(true)}
        />
        <SideBar open={open} setOpen={setOpen} />
        <N.Logo to="/">
          <N.LogoImg src={logo} alt="logo" />
        </N.Logo>
        <N.SearchForm>
          <N.Input placeholder="Search anime..." />
          <N.SearchIcon>
            <FaSearch size={16} />
          </N.SearchIcon>
          <N.Filter>Filter</N.Filter>
        </N.SearchForm>
        <N.SocialIcons>
          <N.Item style={{ backgroundColor: '#6f85d5' }}>
            <FaDiscord />
          </N.Item>
          <N.Item style={{ backgroundColor: '#08c' }}>
            <FaTelegramPlane />
          </N.Item>
          <N.Item style={{ backgroundColor: '#ff3c1f' }}>
            <FaRedditAlien />
          </N.Item>
          <N.Item style={{ backgroundColor: '#1d9bf0' }}>
            <FaTwitter />
          </N.Item>
        </N.SocialIcons>
        <N.SettingsIcon>
          <N.SettingsItem>
            <BsBroadcast size={20} color="#cae962" />
            <p>Watch2gether</p>
          </N.SettingsItem>
          <N.SettingsItem>
            <FaRandom size={20} color="#cae962" />
            <p>Random</p>
          </N.SettingsItem>
          <N.SettingsItem>
            <FaLanguage size={20} color="#cae962" />
            <p>Anime name</p>
          </N.SettingsItem>
          <N.SettingsItem>
            <FaComments size={20} color="#cae962" />
            <p>Watch2gether</p>
          </N.SettingsItem>
          <N.Button>Donate</N.Button>
        </N.SettingsIcon>
      </div>
      {/* notification and profile  */}
      <N.Profile>
        <N.ProfileItem>
          <N.ProfileSearch />
        </N.ProfileItem>
        <N.ProfileItem>
          <FaBell />
        </N.ProfileItem>
        <N.ProfileItem>
          <N.ProfileImg src={zorosmall} alt="" />
        </N.ProfileItem>
      </N.Profile>
    </N.Nav>
  )
}

export default NavBar
