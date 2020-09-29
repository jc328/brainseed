import React, { useState, useEffect } from 'react';
import QueueAnim from 'rc-queue-anim';
import '../styles/card.css'
import { Button } from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import Texty from 'rc-texty';
import { Progress, Tooltip } from 'antd';


function Card({data, count, percent, setPercent}) {

  const [appear, setAppear] = useState(false)
  const [card, setCard] = useState('')
  const [photo, setPhoto] = useState('')
  const [answer, setAnswer] = useState('')
  const [audio, setAudio] = useState('')
  const [url, setUrl] = useState('')
  const [cnt, setCnt] = useState(0)
  const [current, setCurrent] = useState(0)
  // const [percent, setPercent] = useState(0);


  // console.log(count ? count: 0)
  useEffect(() => {
    setCard(data)
    if (card !== undefined) {
      if (card.length > 0) {
        let num = parseInt(current)
        let num2 = parseInt(cnt)
        setPhoto(card ? card[num+num2].card_photo : null)
        setAnswer(card ? card[num+num2].card: null)
        setAudio(card ? card[num+num2].card_audio: null)
        setUrl(card ? card[num+num2].card_url: null)
        setCnt(count)
      }
    }
  }, [data, card, current, count, cnt])

  const onClick =() => {
    setAppear(!appear)
  }

  const nextCard =() => {
    setCurrent(parseInt(current)+1)
    setAppear(!appear)
    setPercent(percent + 1)
  }

  return (
    <>
      <div className="card_container">
      <img className="card_photo" style={{height: 500, width: 650}} src={process.env.PUBLIC_URL +'/collection.media/' + photo } alt=""/>
      <QueueAnim delay={500} duration={500}

          >
        {appear ? [
          <div key="a" className="card_answer_container">
          <div key="b" className="card_answer">
            <Texty
              appear={appear}
              duration={1000}
              // type={'flash'}
              >{answer}</Texty>
          </div>
          <div key="c" className="card_url">
          <Button type="text" href={url} target="_blank" style={{color:'lightgrey'}}>Click For More Details</Button>
          </div>

          <ReactAudioPlayer
            src={process.env.PUBLIC_URL +'/collection.media/' + audio }
            autoPlay
            controls
            className="card_audio_player"
            style={{color: 'white'}}
          />
          <Button strokeColor="red" type="ghost" style={{width: '100%', color: 'white'}} onClick={nextCard}>Next Card</Button>
          </div>
        ] : null}

      </QueueAnim>
      </div>

      <Button type="ghost" style={{width: '100%', marginTop: 30, color: 'white'}} onClick={onClick}>Reveal Answer</Button>
      <div className="progress_bar">
      <Tooltip title={`${percent} Cards Completed of 50`}>
      <Progress percent={percent}
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      strokeWidth={20}
      strokeLinecap={'square'}
      showInfo={false}
      status="active" />
       </Tooltip>
       </div>
    </>
  );
}
export default Card;
