import React from 'react';
import QueueAnim from 'rc-queue-anim';
import '../styles/flashcard.css'


function FlashCard() {
  return (
    <>
      <QueueAnim delay={1500} className="flashcard_container">
        <div key="a">Queue Demo</div>
        <div key="b">Queue Demo</div>
        <div key="c">Queue Demo</div>
        <div key="d">Queue Demo</div>
        <div key="c">Queue Demo</div>
        <div key="d">Queue Demo</div>
        <div key="c">Queue Demo</div>
        <div key="d">Queue Demo</div>
        <div key="c">Queue Demo</div>
        <div key="d">Queue Demo</div>
      </QueueAnim>
    </>
  );
}
export default FlashCard;
