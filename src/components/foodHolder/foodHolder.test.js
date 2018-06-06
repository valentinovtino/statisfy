import React from 'react';
import {shallow } from 'enzyme';
import FoodHolder from './foodHolder';

describe('FoodHolder', () => {

  let foodHolder;
  let props = {
    allState: {},
    food: []
  };

  beforeEach(() => {
    foodHolder = shallow(<FoodHolder {...props} />);
  });

  it('matches snapshot', () => {
    expect(foodHolder).toMatchSnapshot();
  });
});