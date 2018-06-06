export const getFood = (food) => {
  return {
    type: 'GET_FOOD',
    food: food
  };
};

export const createFavorites = ({favorites}) => ({
  type: 'CREATE_FAVORITES', 
  favorites
});

export const addToFavorites = (food) => ({
  type: 'ADD_TO_FAVORITES',
  food
});

export const removeFavorite = (food) => ({
  type: 'REMOVE_FAVORITE',
  food
});