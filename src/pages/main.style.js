import styled from 'styled-components'
import img from '../assets/images/zoro-bg.jpg'

export const M = {}

M.Nav = styled.div`
  width: 100%;
  margin-top: 3em;
  position: relative;

  @media only screen and (max-width: 800px) {
    display: flex;
  }
`
M.Ul = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  height: 50px;
  padding-left: 5em;

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
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  padding-left: 5em;
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
  cursor: pointer;

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
  height: 80vh;
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
