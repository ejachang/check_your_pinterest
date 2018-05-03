import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Pins from './Pins';

const Board = (props) => {
  // debugger;
  //fetch info from server
  //redirect to Pins comp link
  return (
    <div id="boardwrapper">
      <Link to={'/boards/' + props.singleboard.name} style={{ textDecoration: 'none' }}>
        <h5 id="singleboardname">{props.singleboard.name}</h5>
        {/* <Route exact path={}/> */}
        <img 
          id="singleboardimage" 
          src={props.singleboard.image['60x60']['url']}
        />
      </Link>
      <Route path={'/boards/' + props.singleboard.name} component={Pins}/>
    </div>
  );
};

export default Board;