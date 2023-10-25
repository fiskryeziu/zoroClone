import React from 'react';
import { useEffect } from 'react';
import Discussion from '../components/Discussion/Discussion';
import Featured from '../components/Featured/Featured';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import MainContainer from '../components/MainContainer/MainContainer';
import NavBar from '../components/NavBar/NavBar';
import Trending from '../components/Trending/Trending';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Trending />
      <Discussion />
      <Featured />
      <MainContainer />
      <Footer />
    </>
  );
};

export default Home;
