import { food, favorites } from './reducer';
import { mockObj } from '../mockData';
import { getFood, createFavorites } from '../actions/actions';

describe('Reducers', () => {
  describe('Get Food Reducer', () => {
    it('should return an array if there is no given state', () => {
      let expected = [];

      let actual = food(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it('should return an array of food when receives the correct action', () => {
      let expected = mockObj.recipes;

      let actual = food(undefined, getFood(mockObj.recipes));

      expect(actual).toEqual(expected);
    });
  });

  describe('Favorites reducer', () => {
    it('should return an array if there is no given state', () => {
      let expected = [];

      let actual = favorites(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it.skip('should return a favorite object when it recieves the correct action', () => {
      let mockFave = {
        title: 'Herb marinated chicken',
        recipe: 'https://www.jamieoliver.com/recipes/chicken-recipes/herb-marinated-chicken/'
      };

      let expected = [{
        title: 'Herb marinated chicken',
        recipe: 'https://www.jamieoliver.com/recipes/chicken-recipes/herb-marinated-chicken/'
      }];

      let actual = favorites(undefined, createFavorites(mockFave));

      expect(actual).toEqual(expected);
    });
  });

});