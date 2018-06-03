export const food = (state = [], action) => {
  switch (action.type) {
    case 'GET_FOOD' :
      return [...state, ...action.food];
    default:
      return state;
  }
};