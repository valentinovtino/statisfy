export const food = (state = {}, action) => {
  switch (action.type) {
    case 'GET_FOOD' :
      return Object.assign(state, {[action.category]: action.food});
    default:
      return state;
  }
};

export const category = (state = '', action) => {
  switch (action.type) {
    case 'STORE_CATEGORY' :
      return action.category;
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
      return [...state, action.food];
    case 'REMOVE_FAVORITE' :
      const newFave = state.filter(favorites => {
        return favorites.recipe_id !== action.food.recipe_id;
      });
      return newFave;
    default:
      return state;
  }
};