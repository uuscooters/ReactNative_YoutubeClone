const initialState = [];

export const reducer = (state = [], action) => {
  if (action.type == 'add') {
    return action.payload;
  }
  return state;
};
