import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Airing from './pages/Airing'
import Error from './pages/Error'
import Genre from './pages/Genre'
import Home from './pages/Home'
import Main from './pages/Main'
import Movies from './pages/Movies'
import Popular from './pages/Popular'
import Series from './pages/Series'
import Watch from './pages/Watch'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<Series />} />
        <Route path="/most-popular" element={<Popular />} />
        <Route path="/top-airing" element={<Airing />} />
        <Route path="/watch/:animeName" element={<Watch />} />
        <Route path="/genre/:genreName" element={<Genre />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
