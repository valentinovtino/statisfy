import { food } from './reducer';
import { mockObj } from '../mockData';
import { getFood } from '../actions/actions';

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
});