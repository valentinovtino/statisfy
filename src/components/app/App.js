import React, { Component } from 'react';
import './App.css';
import { getFoodData } from '../../apiCalls/api';
import PropTypes from 'prop-types';
import FoodHolder from '../../containers/foodHolderContainer';
import { NavLink, Route } from 'react-router-dom';
import Home from '../Home/Home';

class App extends Component {
  constructor(props) {
    super(props);                             
  }

  checkStoreForValue = async (category) => {
    this.props.storeCategory(category);
    !this.props.food[category] ?
      await this.makeCategoryFetch(category) :
      null;
  }

  makeCategoryFetch = async (category) => {
    const key = `42b3556f18500a6865d3d823bb8a3e3c`;
    const url =`https://food2fork.com/api/search?key=${key}&q=${category}`;
    const response = await getFoodData(url);
  
    this.props.storeFood(response.recipes, category);
  }

  render() {
    const { food, category } = this.props;
    return (
      <div className="App">
      
        <div className='fave'>
          <NavLink 
            className='food-btn fave-btn' 
            onClick={this.notifyFave} 
            to='/fave'>My Kitchen</NavLink>
        </div>
        <NavLink to='/' className="App-title">SATISFY</NavLink>
        <p className='slogan'>What are you craving?..</p>

        <div> 
          <div className='navs'>
            <NavLink 
              className='food-btn sweet-btn' 
              to='/sweet' 
              onClick={() => this.checkStoreForValue('vegan')}>SWEET</NavLink>
            <NavLink 
              className='food-btn savory-btn' 
              to='/savory' 
              onClick={() => this.checkStoreForValue('savory')}>SAVORY</NavLink>
            <NavLink 
              className='food-btn nutty-btn' 
              to='/nutty' 
              onClick={() => this.checkStoreForValue('nutty')}>NUTTY</NavLink>
          </div>
          {
            food[category] ?
              <FoodHolder /> :
              <div>
              </div>
          }
        
          <Route exact path='/' component={Home} />  
        </div>
      </div>
    );
  }
}

App.propTypes = {
  food: PropTypes.func,
  category: PropTypes.string,
  storeFood: PropTypes.func.isRequired,
  storeCategory: PropTypes.func
};

export default App;
