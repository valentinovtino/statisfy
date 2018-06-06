import React, { Component } from 'react';
import './App.css';
import { getFoodData } from '../../apiCalls/api';
import PropTypes from 'prop-types';
import FoodHolder from '../../containers/foodHolderContainer';
import { NavLink, Route, Switch } from 'react-router-dom';
import Sweet from '../Sweet/Sweet';
import Nutty from '../Nutty/Nutty';
import Savory from '../Savory/Savory';
import Favorites from '../Favorites/Favorites';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      test: 'testing'
    };                                 
  }

  makeFetchSweet = async () => {
    const url = `https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=vegan`;
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
    this.setState({click: false});
  }

  makeFetchSavory = async () => {
    const url = 'https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=savory';
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
    this.setState({click: false});
  }

  makeFetchNutty = async () => {
    const url = 'https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=nutty';
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
    this.setState({click: false});
  }

  notifyFave = () => {
    this.setState({click: true});
  }


  render() {
    const { food } = this.props;

    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <NavLink to='/' className="App-title">SATISY</NavLink>

        <div> 
          <div>
            <NavLink className='food-btn sweet-btn' to='/sweet' onClick={this.makeFetchSweet}>SWEET</NavLink>
            <NavLink className='food-btn savory-btn' to='/savory' onClick={this.makeFetchSavory}>SAVORY</NavLink>
            <NavLink className='food-btn nutty-btn' to='/nutty' onClick={this.makeFetchNutty}>NUTTY</NavLink>
            <NavLink className='food-btn fave-btn' onClick={this.notifyFave} to='/fave'>My Kitchen</NavLink>
          </div>
         
          <FoodHolder allState={this.state}/> 
          <Route exact path='/sweet' component={Sweet}/>
          <Route exact path='/savory' component={Savory}/>
          <Route exact path='/nutty' component={Nutty}/>
          <Route exact path='/fave' component={Favorites}/>  
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
