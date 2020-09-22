import React, { useState, useEffect } from 'react';
import QueueAnim from 'rc-queue-anim';
import '../styles/card.css'
import { Button } from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import Texty from 'rc-texty';


function Card({data}) {

  const [appear, setAppear] = useState(false)
  const [card, setCard] = useState('')
  const [photo, setPhoto] = useState('')
  const [answer, setAnswer] = useState('')
  const [audio, setAudio] = useState('')
  const [url, setUrl] = useState('')
  const [cnt, setCnt] = useState(0)


  useEffect(() => {
    setCard(data)
    if (card !== undefined) {
      if (card.length > 0) {
        setPhoto(card ? card[cnt].card_photo : null)
        setAnswer(card ? card[cnt].card: null)
        setAudio(card ? card[cnt].card_audio: null)
        setUrl(card ? card[cnt].card_url: null)
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
        {appear ? [
          <div key="a" className="card_answer_container">
          <div key="b" className="card_answer">
            <Texty
              appear={appear}
              duration={2000}
              type={'flash'}
              >{answer}</Texty>
          </div>
          <div key="c" className="card_url">
          <a style={{color:'white'}} target="_blank" rel="noopener noreferrer" href={url}>Click Here To Learn More Here</a>
          </div>

          <ReactAudioPlayer
            src={process.env.PUBLIC_URL +'/collection.media/' + audio }
            autoPlay
            controls
            className="card_audio_player"
            style={{color: 'white'}}
          />
          <Button type="ghost" style={{width: '100%', color: 'white'}} onClick={nextCard}>Next Card</Button>
          </div>
        ] : null}

      </QueueAnim>
      </div>

      <Button type="ghost" style={{width: '100%', marginTop: 20, color: 'white'}} onClick={onClick}>Reveal Answer</Button>
    </>
  );
}
export default Card;
