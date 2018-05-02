import { BOARDS } from '../actions/boards_actions';
/*
root:{} 1 item
data:[] 2 items
0:{} 5 items
url:https://www.pinterest.com/bumper0cars/boys_ref/
image:{} 1 item
60x60:{} 3 items
id:307441180751850408
counts:{} 3 items
pins:52
collaborators:0
followers:40
name:boys_ref
1:{} 5 items
url:https://www.pinterest.com/bumper0cars/bsd_girl/
image:{} 1 item
60x60:{} 3 items
url:https://i.pinimg.com/60x60/95/8a/ad/958aad421d8cb99a83412623623ceb96.jpg
width:60
height:60
id:307441180751851351
counts:{} 3 items
pins:29
collaborators:0
followers:40
name:bsd_girl
*/
let _defaultBoards = Object.freeze({
  boards: { data: {} },
  boardsloaded: false
});

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