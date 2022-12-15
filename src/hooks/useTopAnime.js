import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const TopAiringAnime = async () => {
  const { data } = await axios.get('https://api.jikan.moe/v4/watch/episodes')
  const filteredData = data.data.filter((item) => item.region_locked === false)
  return filteredData
}
export default function useTopAnime() {
  return useQuery(['episodes'], () => TopAiringAnime())
}
