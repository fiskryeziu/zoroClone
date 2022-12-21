import styled from 'styled-components'

export const D = {}

D.Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  overflow: hidden;
  background: #313136;
  background: linear-gradient(0deg, #313136 0, rgba(49, 49, 54, 0) 100%);
`

D.WrapperLeft = styled.div`
  display: block;
  position: relative;
  width: 30%;
  height: 400px;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`
D.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

D.WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ show }) => (show ? '70%' : '100%')};
  height: 400px;
  position: relative;
  color: #fff;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`
D.NavTabs = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.3em;
  margin-bottom: 1em;
`
D.TabOne = styled.li`
  font-size: 12px;
  padding: 0.6em 0.5em;
  border: 1px solid transparent;

  &:hover {
    color: #cae962;
  }
  ${({ active }) =>
    active &&
    ` 
    padding: 0.6em .5em;
    border: 1px solid #cae962;
    border-radius: 20px;
    color: #cae962;
  `}
`
D.TabTwo = styled.li`
  font-size: 12px;
  padding: 0.6em 0.5em;
  border: 1px solid transparent;

  &:hover {
    color: #cae962;
  }
  ${({ active }) =>
    active &&
    ` 
    padding: 0.6em .5em;
    border: 1px solid #cae962;
    border-radius: 20px;
    color: #cae962;
`}
`
D.ToggleDisplay = styled.div`
  position: absolute;
  top: 4.4em;
  right: 1em;
  height: 20px;

  ${({ active }) =>
    !active &&
    `
    position: absolute;
    padding: 10px 15px;
    min-width: 190px;
    border: 1px solid #5c5d63;
    border-radius: 10px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    height: 42px;
  `}
`
D.ToggleDisplayOff = styled.div`
  position: absolute;
  padding: 10px 15px;
  min-width: 190px;
  border: 1px solid #5c5d63;
  border-radius: 10px;
  right: auto;
  left: 50%;
  transform: translateX(-50%);
  top: 4em;
  height: 42px;
`
D.ToggleText = styled.div`
  float: left;
  margin-right: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (max-width: 575px) {
    display: ${({ show }) => (show ? 'none' : 'block')};
  }
`
D.ToggleDiv = styled.div`
  display: inline-block;
  width: 44px;
  background: #4d5059;
  height: 24px;
  border-radius: 24px;
  position: relative;
  cursor: pointer;
`
D.Toggle = styled.span`
  background: ${({ show }) => (show ? '#cae962' : 'rgba(255,255,255,.5)')};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
  position: absolute;
  left: ${({ show }) => (show ? 'calc(100% - 24px)' : '0px')};
  transition: all 0.2s ease 0s;
  -webkit-transition: all 0.2s ease 0s;
`
