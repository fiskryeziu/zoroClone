import React from 'react'
import { FaAngleLeft, FaComments } from 'react-icons/fa'
import { S } from './sidebar.style'

const SideBar = ({ open, setOpen }) => {
  return (
    <S.SideMenu open={open} onClick={() => setOpen(!open)}>
      <S.CloseButton>
        <FaAngleLeft /> Close menu
      </S.CloseButton>
      <S.DonateBtn>Donate</S.DonateBtn>
      <S.CommunityBtn>
        <FaComments size={14} color="#cae962" />
        Community
      </S.CommunityBtn>
    </S.SideMenu>
  )
}

export default SideBar
