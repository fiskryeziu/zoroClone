import React from 'react'
import img from '../assets/images/error.png'
import { E } from './error.style'
import { FaChevronCircleLeft } from 'react-icons/fa'

const Error = () => {
  return (
    <E.Container>
      <E.Img src={img} />
      <E.ErrorText>404 Error</E.ErrorText>
      <E.Text>Oops! We can't find this page.</E.Text>
      <E.BtnLink to="/home">
        <FaChevronCircleLeft />
        Back to homepage
      </E.BtnLink>
    </E.Container>
  )
}

export default Error
