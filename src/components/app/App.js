import React, { Component } from 'react';
import './App.css';
import { getFoodData } from '../../apiCalls/api';
import PropTypes from 'prop-types';
import FoodHolder from '../../containers/foodHolderContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }

  makeFetchSweet = async () => {
    const url = `https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=sweet`;
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
  }

  makeFetchSavory = async () => {
    const url = 'https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=savory'
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
  }

  makeFetchNutty = async () => {
    const url = 'https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=nutty'
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
  }

  render() {
    const { food } = this.props

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SATISY</h1>
        </header>
        <button onClick={this.makeFetchSweet}>SWEET</button>
        <button onClick={this.makeFetchSavory}>SAVORY</button>
        <button onClick={this.makeFetchNutty}>NUTTY</button>

        <div>
          { food.length >0 ?
            <FoodHolder/> :
            <div>
            </div>
          }
        </div>
       
      </div>
    );
  }
}

export default App;
