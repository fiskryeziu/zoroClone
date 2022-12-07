import React from 'react'
import { T } from './tredingposts.style'
import { FaComment } from 'react-icons/fa'
import zorosmall from '../../assets/images/zoro-small.jpeg'

const TrendingPosts = () => {
  return (
    <T.CardList>
      {[1, 2, 3, 4].map((item, idx) => (
        <T.Card key={idx}>
          <T.CardInfo>
            <div style={{ display: 'flex', gap: '1em' }}>
              <p style={{ color: '#4da6ff' }}>#General</p> <p>2 hours ago</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}>
              <FaComment color="#fff" />
              <p style={{ color: '#fff' }}>44</p>
            </div>
          </T.CardInfo>
          <T.CardTitle>taco bell nacho fries are trash</T.CardTitle>
          <T.CardText>
            they dont taste that great ngl i like em but most of the time the
            fries are cold and its hard to enjoy
          </T.CardText>
          <T.CardProfile>
            <img
              src={zorosmall}
              alt=""
              width={30}
              height={30}
              style={{ borderRadius: '50%' }}
            />
            <p>Zoro</p>
          </T.CardProfile>
        </T.Card>
      ))}
    </T.CardList>
  )
}

export default TrendingPosts
