import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../containers/appContainer';
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

  it('should storeFood when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockObj)}))

    await wrapper.instance().makeFetchSweet();

    expect(mockStoreFood).toHaveBeenCalledWith(mockObj.recipes);
  });

  it('should render food category btn if there is no value in store', () => {

  });
});