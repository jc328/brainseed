import React, { useState, useEffect } from 'react';
import QueueAnim from 'rc-queue-anim';
import '../styles/card.css'
import { Button } from 'antd';



function Card({data}) {

  const [appear, setAppear] = useState(false)
  const [card, setCard] = useState('')
  const [photo, setPhoto] = useState('')

  useEffect(() => {
    setCard(data)
    setPhoto(card ? card[0].card_photo : null)

  }, [data, card])

  const onClick =() => {
    setAppear(!appear)
  }

  // let cardPhoto = card ? card[0].card_Photo: null
  // let cardPhoto = card ? 'github.png': null
  console.log(photo)
  return (
    <>
    <Button type="primary" onClick={onClick}>Click to Show Answer</Button>
      <QueueAnim delay={500} duration={1000}
          className="card_container"
          >
        <img src={process.env.PUBLIC_URL +'/collection.media/' + photo } alt=""/>

        {appear ? [<div key="test">
          <div key="a">Answer</div>
          <div key="bb">Click on a Deck to get Started</div>
          <div key="cc">Click on a Deck to get Started</div>
          <div key="ee">Click on a Deck to get Started</div>
          <div key="ff">Click on a Deck to get Started</div>
          <div key="gg">Click on a Deck to get Started</div>
          <div key="hh">Click on a Deck to get Started</div>
          <div key="ii">Click on a Deck to get Started</div>
          </div>
        ] : null}
      </QueueAnim>
    </>
  );
}
export default Card;
