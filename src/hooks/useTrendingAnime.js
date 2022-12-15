import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const fetchTrendingAnime = async () => {
  const { data } = await axios.get('https://kitsu.io/api/edge/trending/anime')
  return data
}
export default function useTrendingAnime() {
  return useQuery(['trending'], () => fetchTrendingAnime())
}
