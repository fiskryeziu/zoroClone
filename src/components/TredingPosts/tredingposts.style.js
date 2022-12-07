import styled from 'styled-components'

export const T = {}

T.CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
T.Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #fff;
  padding: 2em 1em;
  background: rgb(255, 255, 255, 0.05);
  gap: 1em;
  width: 100%;
`
T.CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaa;
`
T.CardTitle = styled.h1`
  font-size: 18px;
  color: #fff;
`
T.CardText = styled.p`
  color: #aaa;
`
T.CardProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`
