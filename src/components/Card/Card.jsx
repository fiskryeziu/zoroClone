import React, { useState } from "react"
import { FaPlay } from "react-icons/fa"
import { C } from "./card.style"
import CardToolTip from "../CardTooltip/CardToolTip"
import useScrollTooltip from "../../hooks/useScrollTooltip"

const Card = ({ data }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const { top, active, setActive } = useScrollTooltip()

  const handleMouseEnter = () => {
    setShowTooltip(true)
    setActive(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
    setActive(false)
  }

  return (
    <C.Card
      className={`card ${active ? "active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <C.Poster>
        <C.Image src={data.entry.images.jpg.image_url} />
        <C.InfoL>
          <C.BtnL>SUB</C.BtnL> <C.BtnL>DUB</C.BtnL>
        </C.InfoL>
        <C.InfoR>
          <C.BtnR>Ep {data.episodes[0].mal_id}</C.BtnR>
        </C.InfoR>
        <FaPlay />
      </C.Poster>
      <C.Details>
        <C.Name>{data.entry.title}</C.Name>
      </C.Details>
      {showTooltip ? <CardToolTip show={showTooltip} top={top} /> : null}
    </C.Card>
  )
}

export default Card
