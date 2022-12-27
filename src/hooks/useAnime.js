import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export function useLatestEpisode() {
  const TopAiringAnime = async () => {
    const { data } = await axios.get('https://api.jikan.moe/v4/watch/episodes')
    const filteredData = data.data.filter(
      (item) => item.region_locked === false
    )
    return filteredData
  }
  return useQuery(['episodes'], () => TopAiringAnime())
}
export function useSeries() {
  const fetchSeries = async () => {
    const { data } = await axios.get(
      'https://api.jikan.moe/v4/top/anime?type=tv'
    )
    return data
  }
  return useQuery(['series'], () => fetchSeries())
}
export function usePopular() {
  const fetchMostPopular = async () => {
    const { data } = await axios.get(
      'https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity'
    )
    return data
  }
  return useQuery(['popular'], () => fetchMostPopular())
}
export function useAiring() {
  const fetchTopAiring = async () => {
    const { data } = await axios.get(
      'https://api.jikan.moe/v4/top/anime?type=tv&filter=airing'
    )
    return data
  }
  return useQuery(['airing'], () => fetchTopAiring())
}

export function useMovies() {
  const fetchMovies = async () => {
    const { data } = await axios.get(
      'https://api.jikan.moe/v4/top/anime?type=movie'
    )
    return data
  }
  return useQuery(['movies'], () => fetchMovies())
}
export function useGenre({ genre }) {
  const fetchGenre = async () => {
    const { data } = await axios.get('https://api.jikan.moe/v4/anime')
    const filteredData = data.data.filter((item) => {
      if (item) {
        return (
          item?.genres[0]?.name.toLowerCase() === genre ||
          item?.genres[1]?.name.toLowerCase() === genre ||
          item?.genres[2]?.name.toLowerCase() === genre ||
          item?.genres[3]?.name.toLowerCase() === genre ||
          item?.genres[4]?.name.toLowerCase() === genre
        )
      }
    })
    return filteredData
  }
  return useQuery(['genres', genre], () => fetchGenre())
}

export const useSearchAnime = (filter) => {
  const fetchData = async () => {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime`)

    const filteredData = await data.data.filter((item) => {
      if (item.title_english) {
        return item.title_english.toLowerCase().includes(filter)
      } else {
        return item.title.toLowerCase().includes(filter)
      }
    })
    return filteredData
  }
  return {
    ...useQuery(['searchAnime', filter], () => {
      if (filter.length > 1) {
        return fetchData()
      }
      return []
    }),
  }
}
