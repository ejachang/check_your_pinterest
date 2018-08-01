import { BOARDS } from '../actions/boards_actions';

let _defaultBoards = Object.freeze({
  boards: { data: {} },
  boardsloaded: false
});
// debugger;
const DefaultBoardReducer = (state = _defaultBoards, action) => {
  let newDefaultBoards = Object.assign({}, _defaultBoards);
  switch (action.type) {
  case BOARDS:
    newDefaultBoards.boards = action.payload;
    newDefaultBoards.boardsloaded = true;
    return newDefaultBoards;
  default: 
    return _defaultBoards;
  }
};

export default DefaultBoardReducer;