import React from "react"
import Hero from "../Hero/Hero"
import { L } from "./loader.style"
import NavBar from "../NavBar/NavBar"

function HomeSkeleton() {
  return (
    <>
      <NavBar />
      <L.Hero>
        <L.Skeleton>
          <L.Rank></L.Rank>
        </L.Skeleton>

        <L.Skeleton>
          <L.Title></L.Title>
        </L.Skeleton>
        <L.Group>
          <L.Skeleton>
            <L.Desc></L.Desc>
          </L.Skeleton>
          <L.Skeleton>
            <L.Desc></L.Desc>
          </L.Skeleton>
          <L.Skeleton>
            <L.Desc></L.Desc>
          </L.Skeleton>
        </L.Group>
      </L.Hero>
    </>
  )
}

export default HomeSkeleton
