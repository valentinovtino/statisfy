import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { mockObj } from '../../mockData.js';


describe('App', () => {
  let wrapper;
  let mockStoreFood = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>, {disableLifecycleMethods: true});
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Savory button', () => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.savory-btn').length).toEqual(1)
  });

  it('should render Sweet button', () => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.sweet-btn').length).toEqual(1)
  });

  it('should render nutty button', () => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.nutty-btn').length).toEqual(1)
  });

  it('should render fave button', () => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.fave-btn').length).toEqual(1)
  });


  it('should storeFood when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockObj)}))

    await wrapper.instance().makeFetchSweet();

    expect(mockStoreFood).toHaveBeenCalledWith(mockObj.recipes);
  });

  it('should storeFood when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockObj)}))

    await wrapper.instance().makeFetchSavory();

    expect(mockStoreFood).toHaveBeenCalledWith(mockObj.recipes);
  });

  it('should storeFood when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockObj)}))

    await wrapper.instance().makeFetchNutty();

    expect(mockStoreFood).toHaveBeenCalledWith(mockObj.recipes);
  });

  it('should render food category btn if there is no value in store', () => {

  });
});