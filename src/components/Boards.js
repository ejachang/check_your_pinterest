import React, { Component } from 'react';
import Board from './Board';

class Boards extends Component {
  render() {
    console.log('board props', this.props);
    let { defaultboards } = this.props;
    // debugger;
    return (
      <div>
        {defaultboards.boards.data.map((boarddata) => {
          return <Board 
            singleboard = {boarddata}
            key={boarddata.id}/>;
        })
        }
      </div>
    );
  }
}

export default Boards;