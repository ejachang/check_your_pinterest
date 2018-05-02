import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const Board = (props) => {
  return (
    <div id="boardwrapper">
      <Link to={'/boards/' + props.singleboard.name} style={{ textDecoration: 'none' }}>
        <h5 id="singleboardname"><a>{props.singleboard.name}</a></h5>
      </Link>
      <img 
        id="singleboardimage" 
        src={props.singleboard.image['60x60']['url']}
        onClick={() => { window.location = props.singleboard.url; }}
      />
    </div>
  );
};

export default Board;