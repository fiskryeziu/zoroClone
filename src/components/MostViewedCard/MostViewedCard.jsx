import React, { useState } from 'react'
import Content from './Content'
import { M } from './mostviewed.style'

const MostViewedCard = () => {
  const [option, setOption] = useState('today')
  const onChange = (e) => {
    setOption(e.target.value)
  }
  return (
    <M.Card>
      <M.Nav>
        <M.Wrapper>
          <M.RadioBtn
            type="radio"
            value="today"
            id="today"
            checked={option === 'today'}
            onChange={onChange}
          />
          <label htmlFor="today">Today</label>
        </M.Wrapper>
        <M.Wrapper>
          <M.RadioBtn
            type="radio"
            id="week"
            value="week"
            checked={option === 'week'}
            onChange={onChange}
          />
          <label htmlFor="week">Week</label>
        </M.Wrapper>
        <M.Wrapper>
          <M.RadioBtn
            type="radio"
            id="month"
            value="month"
            checked={option === 'month'}
            onChange={onChange}
          />
          <label htmlFor="month">Month</label>
        </M.Wrapper>
      </M.Nav>
      <Content option={option} />
    </M.Card>
  )
}

export default MostViewedCard
