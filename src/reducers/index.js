import { combineReducers } from 'redux';
import { food, favorites, category } from './reducer';

export const rootReducer = combineReducers({
  food: food,
  favorites: favorites,
  category: category
}); 
