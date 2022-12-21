import React, { useState } from 'react'
import { D } from './discussion.style'
import img from '../../assets/images/discussion.png'
import CommentSlider from './CommentSlider'
import { useEffect } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

const Discussion = () => {
  const [show, setShow] = useLocalStorage('show', true)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const data = localStorage.getItem('show')
    if (data !== null) setShow(Boolean(JSON.parse(data)))
  }, [])

  useEffect(() => {
    localStorage.setItem('show', JSON.stringify(show))
  })
  return (
    <D.Container>
      {show && (
        <D.WrapperLeft>
          <D.Img src={img} />
        </D.WrapperLeft>
      )}
      <D.WrapperRight show={show}>
        <D.ToggleDisplay active={show}>
          <D.ToggleText show={show}>Show Comments</D.ToggleText>
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
