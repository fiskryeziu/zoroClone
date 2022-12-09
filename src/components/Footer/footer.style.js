import styled from 'styled-components'
import footerImg from '../../assets/images/footer.jpg'

export const F = {}

F.Footer = styled.footer`
  padding: 0px 0 0;
  position: relative;
  background: #2a2c31 url(${footerImg}) top center no-repeat;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
  margin-top: 10em;

  @media only screen and (max-width: 759px) {
    justify-content: center;
    align-items: center;
  }
`
F.Top = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  width: fit-content;
  padding: 1.5em 0;
  gap: 2em;
  @media only screen and (max-width: 480px) {
    border: none;
    padding: 0.5em 0;
  }
`
F.Logo = styled.div`
  display: block;
  height: 40px;

  @media only screen and (max-width: 578px) {
    height: 34px;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`
F.LogoImg = styled.img`
  width: auto;
  height: 100%;
`

F.SocialIcons = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 0.2em;
  padding-left: 2em;
  border-left: 1px solid rgba(255, 255, 255, 0.15);

  @media only screen and (max-width: 480px) {
    border: none;
  }
`
F.Item = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  text-align: center;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
`

F.ListAz = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`
F.TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2em;
  color: #fff;

  @media only screen and (max-width: 759px) {
    align-items: center;
    justify-content: center;
  }
`
F.TextLeft = styled.p`
  display: inline-block;
  padding-right: 2em;
  margin-right: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  line-height: 1em;
  font-size: 1.1em;
  font-weight: 600;

  @media only screen and (max-width: 759px) {
    font-size: 0.9em;
  }
`
F.TextRight = styled.p`
  font-size: 12px;

  @media only screen and (max-width: 759px) {
    font-size: 10px;
  }
`

F.ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  @media only screen and (max-width: 759px) {
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`
F.Button = styled.li`
  color: #fff;
  font-size: 14px;
  padding: 4px 8px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: #111;
    background: #cae962;
  }
`
F.Links = styled.div`
  display: flex;
  gap: 2em;
`
F.LinkItem = styled.p`
  font-size: 12px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #cae962;
  }
`
F.AboutTxt = styled.p`
  font-size: 12px;
  color: #aaa;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`
F.CopyrightTxt = styled.p`
  font-size: 12px;
  color: #aaa;
`
