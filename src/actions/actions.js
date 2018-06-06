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

export const removeFavorite = (title) => ({
  type: 'REMOVE_FAVORITE',
  title
});