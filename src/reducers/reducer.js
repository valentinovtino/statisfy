export const food = (state = [], action) => {
  switch (action.type) {
    case 'GET_FOOD' :
      return [...action.food];
    default:
      return state;
  }
};

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_FAVORITES' :
      return [...state, 
        action.favorites
      ];
    case 'ADD_TO_FAVORITES' :
    return [...state, ...favorites, action.food];
    default:
      return state;
  }
};