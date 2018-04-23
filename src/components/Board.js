import React, { Component } from 'react';

const Board = (props) => {
  console.log('single', props);
  return (
    <div>
      <h5 id="singleboardname">{props.singleboard.name}</h5>
      <img id="singleboardimage" src={props.singleboard.image['60x60']['url']}/>
    </div>
  );
};

export default Board;