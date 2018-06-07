import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { mockObj, userCleanedData, mockCategory } from '../../mockData.js';

describe.skip('App', () => {
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
    expect(wrapper.find('.savory-btn').length).toEqual(1);
  });

  it('should render Sweet button', () => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.sweet-btn').length).toEqual(1);
  });

  it('should render nutty button', () => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.nutty-btn').length).toEqual(1);
  });

  it('should render fave button', () => {
    wrapper = shallow(<App storeFood={mockStoreFood}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('.fave-btn').length).toEqual(1);
  });


  it('should storeFood when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(userCleanedData)}));

    await wrapper.instance().makeCategoryFetch();

    expect(mockStoreFood).toHaveBeenCalledWith(userCleanedData, mockCategory);
  });

  it('should storeFood when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockObj)}));

    await wrapper.instance().makeCategoryFetch();

    expect(mockStoreFood).toHaveBeenCalledWith(mockObj.recipes);
  });

  it('should storeFood when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockObj)}));

    await wrapper.instance().makeCategoryFetch();

    expect(mockStoreFood).toHaveBeenCalledWith(mockObj.recipes);
  });

  it('should render food category btn if there is no value in store', () => {

  });
});