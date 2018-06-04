import React, { Component } from 'react';
import './App.css';
import { getFoodData } from '../../apiCalls/api';
import PropTypes from 'prop-types';
import FoodHolder from '../../containers/foodHolderContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'testing'
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

        
        <div className="book">
          <span className="page turn"></span>
          <span className="page turn"></span>
          <span className="page turn"></span>
          <span className="page turn">~~~~~</span>
          <span className="page turn"></span>
          <span className="page turn">
            <h3>What're you craving?..</h3>
            <button onClick={this.makeFetchSweet}>SWEET</button>
            <button onClick={this.makeFetchSavory}>SAVORY</button>
            <button onClick={this.makeFetchNutty}>NUTTY</button>
          </span>
          <span className="cover"></span>
          <span className="page"></span>
          <span className="cover turn"></span>
        </div>

        <div>
          { food.length >0 ?
            <FoodHolder allState={this.state}/> :
            <div>
            </div>
          }
        </div>
       
      </div>
    );
  }
}

export default App;
