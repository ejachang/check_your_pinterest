import React from 'react';
import Pins from './Pins';

const Board = (props) => {
  return (
    <div id="boardwrapper">
      <h5 id="singleboardname">{props.singleboard.name}</h5>
      <img 
        id="singleboardimage" 
        src={props.singleboard.image['60x60']['url']}
      />
    </div>
  );
};

export default Board;