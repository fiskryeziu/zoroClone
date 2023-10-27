import React from "react"
import { CTooltip } from "./cardtooltip.style"

const CardToolTip = ({ show, top }) => {
  return (
    <CTooltip.Wrapper
      className="tooltip"
      show={show}
      top={top}
    ></CTooltip.Wrapper>
  )
}

export default CardToolTip
