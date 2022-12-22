import React from 'react'
import { useParams } from 'react-router-dom'
import CardTwo from '../components/Card/CardTwo'
import Footer from '../components/Footer/Footer'
import GenreCard from '../components/GenreCard/GenreCard'
import { M } from '../components/MainContainer/maincontainer.style'
import MostViewedCard from '../components/MostViewedCard/MostViewedCard'
import NavBar from '../components/NavBar/NavBar'
import ShareButton from '../components/ShareButton'
import { useGenre } from '../hooks/useAnime'

const Genre = () => {
  const params = useParams()
  const genre = params.genreName
  const { data, isFetched } = useGenre({ genre })
  return (
    <>
      <NavBar />
      <ShareButton borderRadius={false} />
      <M.MainWrapper>
        <M.Main>
          <M.Heading>{genre[0].toUpperCase() + genre.slice(1)} Anime</M.Heading>
          <M.MovieList>
            {isFetched &&
              data.map((item, idx) => <CardTwo key={idx} data={item} />)}
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

export default Genre
