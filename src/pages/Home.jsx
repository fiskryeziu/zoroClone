import React from 'react'
import Discussion from '../components/Discussion/Discussion'
import Hero from '../components/Hero/Hero'
import NavBar from '../components/NavBar/NavBar'
import Trending from '../components/Trending/Trending'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Trending />
      <Discussion />
    </>
  )
}

export default Home
