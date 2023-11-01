import React from "react"
import { CTooltip } from "./cardtooltip.style"
import { data } from "../../data/mockData"
import { FaPlay, FaStar } from "react-icons/fa"
import { BiSolidCaptions, BiMicrophone } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const style = {
  hd: {
    background: "#ffdd95",
    padding: ".1px 5px",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
  },
  sub: {
    display: "flex",
    background: "#b0e3af",
    alignItems: "center",
    fontSize: "11px",
    padding: ".1px 5px",
  },
  dub: {
    display: "flex",
    background: "#e3b5cd",
    alignItems: "center",
    fontSize: "11px",
    padding: ".1px 5px",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
  },
}

const CardToolTip = ({ show, top }) => {
  console.log(data)
  return (
    <CTooltip.Wrapper
      className="tooltip"
      show={show}
      top={top}
      onMouseLeave={() => console.log("hello")}
    >
      <CTooltip.Title>
        Bleach: Thousand-Year Blood War - The Separation
      </CTooltip.Title>
      <CTooltip.Details>
        <div
          style={{
            display: "flex",
            gap: "2px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "5px",
              paddingRight: "1em",
            }}
          >
            <FaStar color="yellow" />{" "}
            <p style={{ fontSize: "14px", color: "#fff" }}>
              {data.details.rating}
            </p>
          </div>

          <span style={style.hd}>HD</span>
          <div style={style.sub}>
            <BiSolidCaptions fontSize={16} />
            <p>13</p>
          </div>
          <div style={style.dub}>
            <BiMicrophone fontSize={16} />
            <p>13</p>
          </div>
        </div>
        <span style={style.hd}>TV</span>
      </CTooltip.Details>
      <CTooltip.Description>{data.description}</CTooltip.Description>
      <CTooltip.Info>
        <p>
          <span
            style={{
              color: "#cccccc",
            }}
          >
            Japanese :
          </span>{" "}
          {data.japanese}
        </p>
        <p>
          <span
            style={{
              color: "#cccccc",
            }}
          >
            Status:
          </span>{" "}
          {data.status}
        </p>
        <p>
          <span
            style={{
              color: "#cccccc",
            }}
          >
            Aired:
          </span>{" "}
          {data.aired}
        </p>
        <p>
          <span
            style={{
              color: "#cccccc",
            }}
          >
            Genres:
          </span>{" "}
          {data.genres.map((genre) => genre + ", ")}
        </p>
      </CTooltip.Info>
      <CTooltip.BtnWrapper>
        <CTooltip.Btn>
          <FaPlay /> Watch now
        </CTooltip.Btn>
        <span
          style={{
            background: "#fff",
            borderRadius: "50%",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiOutlinePlus size={32} fill="black" />
        </span>
      </CTooltip.BtnWrapper>
    </CTooltip.Wrapper>
  )
}

export default CardToolTip
