import styled from 'styled-components'

export const S = {}

S.SideMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;
  background-color: #2a2c31;
  transform: ${({ open }) => (!open ? 'translateX(-350px)' : 'translateX(0)')};
  margin-bottom: 2000px;
  overflow-y: auto;
  gap: 1em;
  z-index: 5;
  transition: transform 500ms ease;

  @media only screen and (max-width: 860px) {
    width: 300px;
  }
`

S.CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4a4b51;
  border-radius: 20px;
  width: 110px;
  padding: 0.8em 0;
  margin: 2em 0 0 1em;
  line-height: 12px;
  color: #fff;
  font-weight: 500;
  gap: 0.3em;
  cursor: pointer;
`
S.DonateBtn = styled.button`
  line-height: 36px;
  border-radius: 20px;
  /* width: 100%; */
  margin-inline: 1em;
  font-size: 13px;
  font-weight: 500;
  padding: 0 1rem;
  color: #000;
  background-color: #00ffb7;
`
S.CommunityBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
  line-height: 36px;
  border-radius: 20px;
  margin-inline: 1em;
  font-size: 13px;
  font-weight: 500;
  padding: 0 1rem;
  color: #fff;
  background-color: #222327;
`
S.SettingsIcon = styled.div`
  display: none;
  align-items: center;
  margin: 0 auto;
  gap: 1em;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: auto;
  padding: 15px;

  @media only screen and (max-width: 760px) {
    display: flex;
  }
`
S.SettingsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #fff;
  gap: 0.2em;
`
S.NavList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  margin-bottom: 1em;
`
S.Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  padding: 1em 1em;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`

S.GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`
S.GenreItem = styled.p`
  padding: 6px 15px;
  width: 49%;
  margin-right: 1%;
  cursor: pointer;

  &:nth-of-type(7n + 1) {
    color: #d0e6a5;
  }
  &:nth-of-type(7n + 2) {
    color: #ffdd95;
  }
  &:nth-of-type(7n + 3) {
    color: #fc887b;
  }
  &:nth-of-type(7n + 4) {
    color: #ccabda;
  }
  &:nth-of-type(7n + 5) {
    color: #abccd8;
  }
  &:nth-of-type(7n + 6) {
    color: #d8b2ab;
  }
  &:nth-of-type(7n) {
    color: #86e3ce;
  }
`
