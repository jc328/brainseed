import React, { useState, useEffect } from 'react';
import QueueAnim from 'rc-queue-anim';
import '../styles/card.css'
import { Button } from 'antd';
import ReactAudioPlayer from 'react-audio-player';


function Card({data}) {

  const [appear, setAppear] = useState(false)
  const [card, setCard] = useState('')
  const [photo, setPhoto] = useState('')
  const [answer, setAnswer] = useState('')
  const [audio, setAudio] = useState('')
  const [cnt, setCnt] = useState(0)


  useEffect(() => {
    setCard(data)
    if (card !== undefined) {
      if (card.length > 0) {
        setPhoto(card ? card[cnt].card_photo : null)
        setAnswer(card ? card[cnt].card: null)
        setAudio(card ? card[cnt].card_audio: null)
      }
    }
  }, [data, card, cnt])

  const onClick =() => {
    setAppear(!appear)
  }

  const nextCard =() => {
    setCnt(cnt+1)
    setAppear(!appear)
  }

  return (
    <>
      <div className="card_container">
      <img style={{height: 400, width: 500}} src={process.env.PUBLIC_URL +'/collection.media/' + photo } alt=""/>
      <QueueAnim delay={500} duration={1000}

          >
        {appear ? [<div key="0">
          <div key="a">Answer</div>
          <div key="b">{answer}</div>
          <ReactAudioPlayer
        src={process.env.PUBLIC_URL +'/collection.media/' + audio }
        autoPlay
        controls
        />
        <Button type="primary" onClick={nextCard}>Next Card</Button>
          </div>
        ] : null}

      </QueueAnim>
      </div>

      <Button type="primary" onClick={onClick}>Reveal Answer</Button>
    </>
  );
}
export default Card;
