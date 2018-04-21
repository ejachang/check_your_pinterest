import { DEFAULT_BOARD } from '../actions/default_board_actions';
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
let _defaultBoard = Object.freeze({
  url: null,
  image: null
});

const DefaultBoardReducer = (state = _defaultBoard, action) => {
  let newDefaultBoard = Object.assign({}, _defaultBoard);
  switch (action.type) {
  case DEFAULT_BOARD:
    newDefaultBoard.url = action.payload.root.data[0].url;
    newDefaultBoard.image = action.payload.root.data[0].image;
    break;
  default: 
    return _defaultBoard;
  }
};

export default DefaultBoardReducer;