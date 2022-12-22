import styled from 'styled-components'
import img from '../assets/images/zoro-bg.jpg'
import { Link } from 'react-router-dom'

export const M = {}

M.Nav = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 70px;
  display: flex;
  margin-top: 2.5em;
  position: relative;
  @media only screen and (max-width: 1200px) {
    margin: 0;
  }
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`
M.Ul = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  padding-left: 5.5em;
  @media only screen and (max-width: 1200px) {
    padding-left: 2em;
  }
  @media only screen and (max-width: 800px) {
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    top: 60px;
    left: 15px;
    right: 15px;
    flex-direction: column;
    width: auto;
    height: auto;
    background: rgba(92, 93, 99, 0.98);
    border-radius: 25px;
    padding: 10px 0;
    z-index: 3;
  }
`

M.MenuOpen = styled.div`
  display: none;
  color: ${({ isOpen }) => (isOpen ? '#cae962' : '#fff')};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  padding-left: 2em;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`

M.Li = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;

  &:hover {
    color: #cae962;
  }
`
M.Banner = styled.div`
  position: relative;
  display: flex;
  background: url(${img});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 75vh;
  align-items: center;

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #202125;
    background: -moz-linear-gradient(
      180deg,
      #202125 0,
      rgba(32, 33, 37, 0.6) 40%,
      rgba(32, 33, 37, 0) 60%,
      rgba(32, 33, 37, 0) 80%,
      #202125 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      #202125 0,
      rgba(32, 33, 37, 0.6) 40%,
      rgba(32, 33, 37, 0) 60%,
      rgba(32, 33, 37, 0) 80%,
      #202125 100%
    );
    background: linear-gradient(
      180deg,
      #202125 0,
      rgba(32, 33, 37, 0.6) 40%,
      rgba(32, 33, 37, 0) 60%,
      rgba(32, 33, 37, 0) 80%,
      #202125 100%
    );
  }
`

M.Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-left: 5em;
  width: 50%;
  z-index: 2;

  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 0 2em;
  }
  @media only screen and (max-width: 524px) {
    align-items: center;
  }
`
M.Logo = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
`
M.Input = styled.input`
  border-radius: 50px;
  border: none;
  width: 100%;
  height: 50px;
  padding: 0 1em;
  font-size: 16px;
  color: #495057;
`
M.Button = styled.button`
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 70%;
  border: none;
  padding: 5px;
  background-color: #cae962;
  color: #111;
  font-size: 20px;
`
M.Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2em;
`
M.textBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
M.span = styled.span`
  margin-right: 20px;
  font-weight: 500;
  color: #fff;
  margin-right: 10px;
  float: left;
`
M.Text = styled.p`
  margin: 0 6px 6px 0;
  display: block;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  color: #aaaaaa;
  cursor: pointer;

  &:hover {
    color: #cae962;
  }
`

M.Right = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  z-index: 2;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`
M.iconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 5em;
  z-index: 2;
`

M.Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

M.Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.5em;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    padding: 0 0.5em;
  }
`

M.Action = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 700;
  color: #111;
  letter-spacing: 1px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #cae962;
  margin-top: -5px;
  z-index: 2;

  @media only screen and (max-width: 524px) {
    border-radius: 40px;
    margin-top: -30px;
    font-size: 18px;
  }
`

M.BoxWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 1000px) {
    gap: 1em;
    flex-direction: column;
  }
`
M.BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  float: right;
  color: #aaa;
  gap: 2em;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`
M.BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 450px);
  color: #aaa;
  padding: 0 2em;
  gap: 2em;
  float: left;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
  }
`
M.Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #aaa;
  padding: 1em;
  background: rgb(255, 255, 255, 0.05);
  border-radius: 10px;
  gap: 1em;
  width: 100%;
`
M.CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
M.CardTitle = styled.h1`
  font-size: 18px;
  color: #fff;
`
M.CardText = styled.p``
M.CardProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`
M.Footer = styled.footer`
  margin-top: 2em;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: #aaa;
`
