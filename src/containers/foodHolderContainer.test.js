import { mapStateToProps, mapDispatchToProps } from './foodHolderContainer';
import { mockObj, mockFave } from '../mockData';
import { addToFavorites, removeFavorite } from '../actions/actions';

describe('FoodHolder', () => {
  it('should return an array of food', () => {
    const mockState = {
      food: mockObj.recipes
    };

    let expected = mockObj.recipes;

    const mappedProps = mapStateToProps(mockState).food;

    expect(mappedProps).toEqual(expected);
  });

  it('should return an array of favorites', () => {
    const mockState = {
      favorites: mockFave
    };

    let expected = mockFave;

    const mappedProps = mapStateToProps(mockState).favorites;

    expect(mappedProps).toEqual(expected);
  });

  it.skip('calls dispatch with a addToFavorites action when addToFavorites is called', () => {
    const mockState = {
      food: {}
    };
    const dispatch = jest.fn();
    const actionToDispatch = addToFavorites(mockState).food;
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.addToFavorites(mockState).food;

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it.skip('calls dispatch with a removeFavorite action when removeFavorite is called', () => {
    const mockState = {
      food: {}
    };
    const dispatch = jest.fn();
    const actionToDispatch = removeFavorite(mockState).food;
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.removeFavorite(mockState).food;

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});