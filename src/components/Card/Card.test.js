import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import ReactDOM from 'react-dom';

describe('Card', () => {
  let wrapper;
  let mockFood = {};

  beforeEach(() => {
    wrapper = shallow(<Card food={mockFood}/>);
  });
  it('should render a card', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleFavorite when add to fav btn is clicked', () => {

  });

  it('should redirect to home page if title is clicked', () => {
        
  });
});