import { mapDispatchToProps, mapStateToProps } from './appContainer';
import { mockObj } from '../mockData';
import { getFood } from '../actions/actions';

describe('AppContainer', () => {
  it('calls dispatch with a getFood action when getFood is called', () => {
    const dispatch = jest.fn();
    const actionToDispatch = getFood(mockObj);
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.storeFood(mockObj);

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should return the food object', () => {
    const mockState = {
      food: {}
    };

    let expected = {}

    const mappedProps = mapStateToProps(mockState).food

    expect(mappedProps).toEqual(expected)
  });
});