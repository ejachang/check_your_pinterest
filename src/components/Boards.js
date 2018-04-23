import React, { Component } from 'react';
import Board from './Board';

class Boards extends Component {
  render() {
    console.log('board props', this.props);
    let { defaultboards } = this.props;
    // debugger;
    return (
      <div className="boardsgrid">
        <div className="GridItems flex flex-wrap centeredWithinWrapper">
          {defaultboards.boards.data.map((boarddata) => {
            return <Board 
              singleboard = {boarddata}
              key={boarddata.id}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Boards;