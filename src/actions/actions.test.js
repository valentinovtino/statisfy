import * as actions from './Actions';
import configureStore from 'redux-mock-store';
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
});