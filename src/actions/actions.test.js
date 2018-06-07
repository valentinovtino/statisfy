import * as actions from './Actions';
import { mockCleanedDataObj } from '../mockData';

describe('Actions', () => {
  describe('GET FOOD',  () => {
    it('should return an action object', () => {

      let expected = {
        type:'GET_FOOD',
        food: mockCleanedDataObj
      };
        
      let actual = actions.getFood(mockCleanedDataObj);
        
      expect(actual).toEqual(expected);
    });
  });

  describe('Create Favorites', () => {
    it('should return an action object', () => {
      
      
      let expected = {
        type: 'CREATE_FAVORITES'
      };

      let actual = actions.createFavorites();

      expect(actual).toEqual(expected);
    });
  });

  describe('Add to Favorites', () => {
    it('should return an action object', () => {
      let food = {

      };

      let expected = {
        type: 'ADD_TO_FAVORITES',
        food
      };

      let actual = actions.addToFavorites(food);

      expect(actual).toEqual(expected);
    });
  });

  describe('Remove from Favorites', () => {
    it('should return an action object', () => {
      let expected = {
        type: 'REMOVE_FAVORITE',
        food: 'Herb marinated chicken'
      };

      let actual = actions.removeFavorite('Herb marinated chicken');

      expect(actual).toEqual(expected);
    });
  });
});