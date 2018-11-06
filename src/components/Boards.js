import React, { Component } from 'react';
// import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { boardsData } from '../actions/boards_actions';
import { substituteboards } from '../fakeData';
import Board from './Board';

// import Search from './Search';
/* Stateless comp doesn't really need to know the Redux state . Redux state is usually a bit higher level
If a component is only using a bit of state for that component specifically, don't really need Redux state,
just React state. But with data that needs to be shared between all comp, Redux is good for that.
*/

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
    console.log('board', allboards[0]);
    debugger
    return (
      <div>
        {/* <div className="search">
          <form>
            <label> Search: 
              <input type="text" 
                value={this.state.enteredtext}
                onChange={this.handleSearchChange}
              />
            </label>
          </form>
        </div> */}
        <div className="boardsgrid">
          <div className="GridItems flex flex-wrap centeredWithinWrapper">
            {/* {console.log('x', allboards)}
            {allboards.data.map((boarddata, idx) => {
              let boarddataLower = boarddata.name.toLowerCase();
              return boarddataLower.includes(this.state.enteredtext.toLowerCase()) ?
                <Board 
                  singleboard = {boarddata}
                  key={boarddata[idx]}/>
                : null;
            })} */}
            {/* {Object.keys(allboards.data).length === 0} */}
            {allboards.data.map((boarddata, idx) => { 
              <Board 
                singleboard = {boarddata}
                key={boarddata[idx]}/>;            
            })}
              
          </div>
        </div> 
      </div>
    );
  }
}

// export default Boards;
//turning state to props on the react comp
const mapStateToProps = state => {
  return { defaultboards: state.defaultboards };
};

// const mapDispatchToProps = (dispatch) => {
//   return { boardsData }; 
// };

export default connect(mapStateToProps)(Boards);