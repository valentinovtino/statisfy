import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import ReactDOM from 'react-dom';

describe('Card', () => {
  let wrapper;
  let mockFood = {};
  let mockFunction = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Card food={mockFood} addToFavorites={mockFunction}/>);
  });
  it('should render a card', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleFavorite when Add to favorites button is clicked', () => {
    wrapper = mount(<Card addToFavorites={mockFunction} food={mockFood} />);

    const spy = spyOn(wrapper.instance(), 'handleFavorite');

    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });

 
});