export const BOARDS = 'BOARDS';

export const boardsData = (data) => {
  return {
    type: BOARDS,
    payload: data
  };
};
