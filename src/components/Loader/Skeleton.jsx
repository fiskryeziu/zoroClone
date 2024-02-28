import React from "react"
import NavBar from "../NavBar/NavBar"
import ShareButton from "../ShareButton"
import { L } from "./loader.style"

function Skeleton() {
  return (
    <>
      <NavBar />
      <ShareButton borderRadius={false} />
      <L.Wrapper>
        <L.Skeleton>
          <L.Card />
        </L.Skeleton>
        <L.Skeleton>
          <L.Card />
        </L.Skeleton>
        <L.Skeleton>
          <L.Card />
        </L.Skeleton>
        <L.Skeleton>
          <L.Card />
        </L.Skeleton>
        <L.Skeleton>
          <L.Card />
        </L.Skeleton>
        <L.Skeleton>
          <L.Card />
        </L.Skeleton>
      </L.Wrapper>
    </>
  )
}

export default Skeleton
