import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const TopAiringAnime = async () => {
  const { data } = await axios.get(
    'https://api.jikan.moe/v4/top/anime?filter=upcoming'
  )
  return data
}
export default function useTopAnime() {
  return useQuery(['airing'], () => TopAiringAnime())
}
