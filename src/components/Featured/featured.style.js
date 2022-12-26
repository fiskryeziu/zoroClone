import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const F = {}

F.Container = styled.div`
  display: flex;
  width: auto;
  flex-wrap: wrap;
  margin-top: 3em;
`
F.Card = styled.div`
  max-width: 25%;
  flex: 0 0 25%;
  margin-bottom: 1em;

  @media screen and (max-width: 1200px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 769px) {
    max-width: 100%;
    flex: 0 0 100%;
  }
`
F.CardBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 90%;
  margin: 0 auto;
  background: #4a4b51;
`
F.CardTitle = styled.h3`
  padding: 1em;
  font-weight: 500;
  color: #cae962;
`
F.CardList = styled.ul``
F.CardItem = styled.li`
  display: flex;
  position: relative;
  margin: 0;
  overflow: hidden;
  padding: 10px 50px 10px 10px;
  &:nth-of-type(2n + 1) {
    background: #414248;
  }
  @media screen and (max-width: 579px) {
    background: #414248;
    &:nth-of-type(n + 5) {
      display: none;
    }
  }
`
F.PosterDiv = styled.div`
  width: 45px;
  height: 60px;
  cursor: pointer;
`
F.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
F.DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  font-size: 12px;
  line-height: 1.2em;
  min-height: 60px;
  color: #ddd;
  position: relative;
  z-index: 2;
`
F.Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4em;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    color: #cae962;
  }
`
F.Details = styled.p``
F.MoreLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  color: #ddd;
  font-size: 14px;
  gap: 1em;
`
