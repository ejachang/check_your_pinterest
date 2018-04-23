import React, { Component } from 'react';

const Board = (props) => {
  return (
    <div id="boardwrapper">
      <h5 id="singleboardname">{props.singleboard.name}</h5>
      <img 
        id="singleboardimage" 
        src={props.singleboard.image['60x60']['url']}
        // onClick={}
      />
    </div>
  );
};

export default Board;