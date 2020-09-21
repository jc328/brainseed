import React from 'react';
import QueueAnim from 'rc-queue-anim';
import '../styles/flashcard.css'


function FlashCard(props) {
  return (
    <>
      <QueueAnim delay={1500} duration={1500} className="flashcard_container">
        <div key="b">Click on a Deck to get Started</div>
        <div key="a">Click on a Deck to get Started</div>
        <div key="c">Click on a Deck to get Started</div>
        <div key="e">Click on a Deck to get Started</div>
        <div key="f">Click on a Deck to get Started</div>
        <div key="g">Click on a Deck to get Started</div>
        <div key="h">Click on a Deck to get Started</div>
        <div key="i">Click on a Deck to get Started</div>
        <div key="j">Click on a Deck to get Started</div>
        <div key="k">Click on a Deck to get Started</div>
      </QueueAnim>
    </>
  );
}
export default FlashCard;
