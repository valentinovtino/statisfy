import { mapStateToProps } from './foodHolderContainer';
import { mockObj } from '../mockData';

describe('FoodHolder', () => {
  it('should return an array of food', () => {
    const mockState = {
      food: mockObj.recipes
    };

    let expected = mockObj.recipes

    const mappedProps = mapStateToProps(mockState).food

    expect(mappedProps).toEqual(expected);
  });
});