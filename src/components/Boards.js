import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boardsData } from '../actions/boards_actions';
import { substituteboards } from '../fakeData';
import Board from './Board';

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredtext: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    // this.handlePinClick = this.handlePinClick.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      enteredtext: e.target.value
    });
  }
  
  render() {
    let allboards = this.props.defaultboards.boards;
    console.log('boards test', allboards);
    if (allboards = 'Boards are loading') {

    }
    return (
      <div>
        <div className="boardsgrid">
          <div className="GridItems flex flex-wrap centeredWithinWrapper">
            { allboards !== 'Boards are loading' ?
              <div className="search">
                <form>
                  <label> Search: 
                    <input type="text" 
                      value={this.state.enteredtext}
                      onChange={this.handleSearchChange}
                    />
                  </label>
                </form>
              </div>
              : null
            }
            { allboards !== 'Boards are loading' ? 
              allboards.data.map((boarddata, idx) => {
                let boarddataLower = boarddata.name.toLowerCase();
                return boarddataLower.includes(this.state.enteredtext.toLowerCase()) ?
                  <Board 
                    singleboard = {boarddata}
                    key={boarddata[idx]}/>
                  : null;
              })
              : <div style={{'text-align': 'center'}}>{allboards}</div>
            }
             
          </div>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { defaultboards: state.defaultboards };
};

// const mapDispatchToProps = (dispatch) => {
//   return { boardsData }; 
// };

export default connect(mapStateToProps)(Boards);