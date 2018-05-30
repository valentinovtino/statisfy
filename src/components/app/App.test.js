import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { mockObj } from '../../mockData.js';

describe('App', () => {
  let wrapper;
  let mockStoreFood = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});