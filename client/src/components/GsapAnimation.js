import React from 'react';
import { Tween, Timeline } from 'react-gsap';

export const CoverAnimation = props => (
  <Timeline
    target={
      <div className="book">
        <img
          src={props.item}
          alt="Book Cover"
          style={{
            width: 230,
            display: 'block',
            margin: 'auto',
            borderRadius: 5
          }}
        />
      </div>
    }
  >
    <Tween from={{ opacity: 0, scale:0 }} to={{ opacity: 1 , scale:1,}} />
    <Tween to={{ rotation:13, delay:1.4}} />
    <Tween to={{ x: '-63px', y: '-23px' }} />
  </Timeline>
);

export default function BookAnimation(props) {
  return (
    <Tween to={{ x: '0px', rotation: -360, color: '#0cf' }}>
      <div className="author book-details">{props.item} </div>
    </Tween>
  );
}
