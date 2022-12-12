import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const E = {}

E.Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6em;
`
E.Img = styled.img`
  max-height: 300px;
  max-width: 100%;
`

E.ErrorText = styled.p`
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2em;
  margin-bottom: 10px;
  color: #fff;
`

E.Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3em;
  margin-bottom: 30px;
  color: #fff;
`

E.BtnLink = styled(Link)`
  background: #cae962;
  color: #111;
  border-color: #cae962;
  padding: 0.6em 0.6em;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5em;
`
