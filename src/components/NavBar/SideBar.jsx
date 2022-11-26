import React, { useEffect } from 'react'
import { BsBroadcast } from 'react-icons/bs'
import { FaAngleLeft, FaComments, FaLanguage, FaRandom } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { S } from './sidebar.style'

const SideBar = ({ open, setOpen }) => {
  return (
    <S.SideMenu open={open}>
      <S.CloseButton onClick={() => setOpen(false)}>
        <FaAngleLeft /> Close menu
      </S.CloseButton>
      <S.SettingsIcon>
        <S.SettingsItem>
          <BsBroadcast size={20} color="#cae962" />
          <p>Watch2gether</p>
        </S.SettingsItem>
        <S.SettingsItem>
          <FaRandom size={20} color="#cae962" />
          <p>Random</p>
        </S.SettingsItem>
        <S.SettingsItem>
          <FaLanguage size={20} color="#cae962" />
          <p>Anime name</p>
        </S.SettingsItem>
      </S.SettingsIcon>
      <S.DonateBtn>Donate</S.DonateBtn>
      <S.CommunityBtn>
        <FaComments size={14} color="#cae962" />
        Community
      </S.CommunityBtn>
      <S.NavList>
        <S.Item>
          <Link to="/home">Home</Link>
        </S.Item>
        <S.Item>
          <Link to="/subbed-anime">Subbed anime</Link>
        </S.Item>
        <S.Item>
          <Link to="/dubbed-anime">Dubbed anime</Link>
        </S.Item>
        <S.Item>
          <Link to="/most-popular">Most popular</Link>
        </S.Item>
        <S.Item>
          <Link to="/movies">Movies</Link>
        </S.Item>
        <S.Item>
          <Link to="/series">Tv Series</Link>
        </S.Item>
        <S.Item>
          <Link to="/ovas">OVAs</Link>
        </S.Item>
        <S.Item>
          <Link to="/specials">Specials</Link>
        </S.Item>
        <S.Item>
          <p style={{ marginBottom: '1em' }}>Genre</p>
          <S.GenreList>
            <S.GenreItem>Action</S.GenreItem>
            <S.GenreItem>Adventure</S.GenreItem>
            <S.GenreItem>Cars</S.GenreItem>
            <S.GenreItem>Comedy</S.GenreItem>
            <S.GenreItem>Dementia</S.GenreItem>
            <S.GenreItem>Demons</S.GenreItem>
            <S.GenreItem>Drama</S.GenreItem>
            <S.GenreItem>Ecchi</S.GenreItem>
            <S.GenreItem>Fantasy</S.GenreItem>
            <S.GenreItem>Game</S.GenreItem>
          </S.GenreList>
        </S.Item>
      </S.NavList>
    </S.SideMenu>
  )
}

export default SideBar
