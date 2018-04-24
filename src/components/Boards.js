import React, { Component } from 'react';
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
  }
  handleSearchChange(e) {
    this.setState({
      enteredtext: e.target.value
    });
  }
  render() {
    // console.log('board props', this.props);
    let { defaultboards } = this.props;
    // debugger;
    return (
      <div>
        <div className="search">
          <form>
            <label> Search: 
              <input type="text" 
                value={this.state.enteredtext}
                onChange={this.handleSearchChange}
              />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>
        <div className="boardsgrid">
          <div className="GridItems flex flex-wrap centeredWithinWrapper">
            {defaultboards.boards.data.map((boarddata) => {
              let boarddataLower = boarddata.name.toLowerCase();
              return boarddataLower.includes(this.state.enteredtext.toLowerCase()) ?
                <Board 
                  singleboard = {boarddata}
                  key={boarddata.id}/>
                : null;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Boards;