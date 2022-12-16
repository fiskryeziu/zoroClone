import React from 'react'
import CardTwo from '../components/Card/CardTwo'
import Footer from '../components/Footer/Footer'
import GenreCard from '../components/GenreCard/GenreCard'
import { M } from '../components/MainContainer/maincontainer.style'
import MostViewedCard from '../components/MostViewedCard/MostViewedCard'
import NavBar from '../components/NavBar/NavBar'
import ShareButton from '../components/ShareButton'
import { useAiring } from '../hooks/useAnime'

const Airing = () => {
  const { data, isFetched } = useAiring()
  return (
    <>
      <NavBar />
      <ShareButton borderRadius={false} />
      <M.MainWrapper>
        <M.Main>
          <M.Heading>Top Airing</M.Heading>
          <M.MovieList>
            {isFetched &&
              data.data.map((item, idx) => <CardTwo key={idx} data={item} />)}
          </M.MovieList>
        </M.Main>
        <M.Aside>
          <M.Heading>Most Viewed</M.Heading>
          <MostViewedCard />
          <M.Heading>Genres</M.Heading>
          <GenreCard />
        </M.Aside>
      </M.MainWrapper>
      <Footer />
    </>
  )
}

export default Airing
