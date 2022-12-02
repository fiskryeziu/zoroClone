import React from 'react'
import Discussion from '../components/Discussion/Discussion'
import Featured from '../components/Featured/Featured'
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
      <Featured />
    </>
  )
}

export default Home
