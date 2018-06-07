export const getFood = (food, category) => ({
  type: 'GET_FOOD',
  food, 
  category
});

export const storeCategory = (category) => ({
  type: 'STORE_CATEGORY',
  category
});

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