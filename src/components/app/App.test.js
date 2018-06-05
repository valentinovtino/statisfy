import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../containers/appContainer';
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

  it('should storeFood when called', () => {

  });

  it('should render food category btn if there is no value in store', () => {

  });
});