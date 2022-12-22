import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGenre } from '../../hooks/useAnime'
import { G } from './genre.style'

const GenreCard = () => {
  const navigate = useNavigate()
  const clickHandler = (e) => {
    navigate(`/genre/${e.target.innerText.toLowerCase()}`)
  }
  return (
    <G.Card>
      <G.List>
        <G.Item onClick={clickHandler}>Action</G.Item>
        <G.Item onClick={clickHandler}>Adventure</G.Item>
        <G.Item onClick={clickHandler}>Cars</G.Item>
        <G.Item onClick={clickHandler}>Comedy</G.Item>
        <G.Item onClick={clickHandler}>Dementia</G.Item>
        <G.Item onClick={clickHandler}>Demons</G.Item>
        <G.Item onClick={clickHandler}>Drama</G.Item>
        <G.Item onClick={clickHandler}>Ecchi</G.Item>
        <G.Item onClick={clickHandler}>Fantasy</G.Item>
        <G.Item onClick={clickHandler}>Game</G.Item>
        <G.Item onClick={clickHandler}>Action</G.Item>
        <G.Item onClick={clickHandler}>Adventure</G.Item>
        <G.Item onClick={clickHandler}>Cars</G.Item>
        <G.Item onClick={clickHandler}>Comedy</G.Item>
        <G.Item onClick={clickHandler}>Dementia</G.Item>
        <G.Item onClick={clickHandler}>Demons</G.Item>
        <G.Item onClick={clickHandler}>Drama</G.Item>
        <G.Item onClick={clickHandler}>Ecchi</G.Item>
        <G.Item onClick={clickHandler}>Fantasy</G.Item>
        <G.Item onClick={clickHandler}>Fantasy</G.Item>
        <G.Item onClick={clickHandler}>Game</G.Item>
      </G.List>
    </G.Card>
  )
}

export default GenreCard
