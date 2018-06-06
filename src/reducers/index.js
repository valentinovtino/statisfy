import { combineReducers } from 'redux';
import { food, favorites } from './reducer';

export const rootReducer = combineReducers({
  food: food,
  favorites: favorites
}); 
