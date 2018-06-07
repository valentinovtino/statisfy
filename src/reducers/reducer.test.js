import { food, favorites, category } from './reducer';
import { mockObj } from '../mockData';
import { getFood, createFavorites, storeCategory, addToFavorites, removeFavorite } from '../actions/actions';

describe('Reducers', () => {
  describe('Get Food Reducer', () => {
    it('should return an obj if there is no given state', () => {
      let expected = {};

      let actual = food(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it('should return an obj of food when receives the correct action', () => {
      let expected = {sweet: mockObj.recipes};

      let actual = food(undefined, getFood(mockObj.recipes, 'sweet'));

      expect(actual).toEqual(expected);
    });
  });
  
  describe('Category Reducer', () => {
    it('should return an empty string if there is nogiven state', () => {
      let expected = '';

      let actual = category(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it('should return an category of food when receives the correct action', () => {
      let expected = 'savory';

      let actual = category(undefined, storeCategory('savory'));

      expect(actual).toEqual(expected);
    });

  });

  describe('Favorites reducer', () => {
    it('should return an array if there is no given state', () => {
      let expected = [];

      let actual = favorites(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it('should return a favorite object when it recieves the correct action', () => {
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
    
    it('should add food to favorites array', () => {
      let mockFave = {
        title: 'Herb marinated chicken',
        recipe: 'https://www.jamieoliver.com/recipes/chicken-recipes/herb-marinated-chicken/'
      };

      let expected = [{
        title: 'Herb marinated chicken',
        recipe: 'https://www.jamieoliver.com/recipes/chicken-recipes/herb-marinated-chicken/'
      }];

      let actual = favorites(undefined, addToFavorites(mockFave));

      expect(actual).toEqual(expected)

    });

    it('should remove food frome favorites array', () => {
      let mockFave = {
        title: 'Herb marinated chicken',
        recipe: 'https://www.jamieoliver.com/recipes/chicken-recipes/herb-marinated-chicken/'
      };

      let expected = [];

      let actual = favorites(undefined, removeFavorite(mockFave));

      expect(actual).toEqual(expected);

    });

  });

});