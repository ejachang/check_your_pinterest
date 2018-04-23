import React, { Component } from 'react';
import Board from './Board';

class Boards extends Component {
  render() {
    console.log('board props', this.props);
    let { defaultboards } = this.props;
    // debugger;
    return (
      <div>
        hello
        {defaultboards.boards.data.map((boarddata) => {
          return <Board 
            defaultboards = {defaultboards}/>;
        })
        }
      </div>
    );
  }
}

export default Boards;