import React, { Component } from 'react';
import './App.css';
import { getFoodData } from '../../apiCalls/api';
import PropTypes from 'prop-types';
import FoodHolder from '../../containers/foodHolderContainer';
import { NavLink, Route } from 'react-router-dom';
import Sweet from '../Sweet/Sweet';
import Nutty from '../Nutty/Nutty';
import Savory from '../Savory/Savory';
import Favorites from '../Favorites/Favorites';
import Home from '../Home/Home';
import { category } from '../../reducers/reducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      test: 'testing'
    };                                 
  }

  checkStoreForValue = async (category) => {
    this.props.storeCategory(category);
    !this.props.food[category] ?
      await this.makeCategoryFetch(category) :
      null;
  }

  makeCategoryFetch = async (category) => {
    const url =`https://food2fork.com/api/search?key=42b3556f18500a6865d3d823bb8a3e3c&q=${category}`;
    const response = await getFoodData(url);
  
    this.props.storeFood(response.recipes, category);
    this.setState({click: false});
  }


  notifyFave = () => {
    this.setState({click: true});
  }


  render() {
    const { food, category } = this.props;
    return (
      <div className="App">
      
        <div className='fave'>
          <NavLink className='food-btn fave-btn' onClick={this.notifyFave} to='/fave'>My Kitchen</NavLink>
        </div>
        <NavLink to='/' className="App-title">SATISFY</NavLink>
        <p className='slogan'>What're you craving?..</p>

        <div> 
          <div className='navs'>
            <NavLink className='food-btn sweet-btn' to='/sweet' onClick={() => this.checkStoreForValue('vegan')}>SWEET</NavLink>
            <NavLink className='food-btn savory-btn' to='/savory' onClick={() => this.checkStoreForValue('savory')}>SAVORY</NavLink>
            <NavLink className='food-btn nutty-btn' to='/nutty' onClick={() => this.checkStoreForValue('nutty')}>NUTTY</NavLink>
          </div>
          {
            food[category] ?
              <FoodHolder /> :
              <div>
              </div>

          }
          {/* <Route exact path='/sweet' component={Sweet}/> */}
          {/* <Route exact path='/savory' component={FoodHolder}/> */}
          {/* <Route exact path='/nutty' component={FoodHolder}/> */}
          {/* <Route exact path='/fave' component={FoodHolder}/> */}
          <Route exact path='/' component={Home} />  
        </div>
      </div>
    );
  }
}

App.propTypes = {
  food: PropTypes.func,
  storeFood: PropTypes.func.isRequired
};
export default App;
