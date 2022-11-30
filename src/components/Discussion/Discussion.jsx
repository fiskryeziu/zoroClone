import React, { useState } from 'react'
import { D } from './discussion.style'
import img from '../../assets/images/discussion.png'
import CommentSlider from './CommentSlider'

const Discussion = () => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(true)
  return (
    <D.Container>
      {show && (
        <D.WrapperLeft>
          <D.Img src={img} />
        </D.WrapperLeft>
      )}
      <D.WrapperRight show={show}>
        <D.ToggleDisplay active={show}>
          <D.ToggleText>Show Comments</D.ToggleText>
          <D.ToggleDiv>
            <D.Toggle show={show} onClick={() => setShow(!show)}></D.Toggle>
          </D.ToggleDiv>
        </D.ToggleDisplay>
        {show && (
          <>
            <D.NavTabs>
              <D.TabOne active={active} onClick={() => setActive(!active)}>
                Newest Comments
              </D.TabOne>
              <D.TabTwo active={!active} onClick={() => setActive(!active)}>
                Top Comments
              </D.TabTwo>
            </D.NavTabs>
            <CommentSlider />
          </>
        )}
      </D.WrapperRight>
    </D.Container>
  )
}

export default Discussion
