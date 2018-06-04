import React, { Component } from 'react';
import './App.css';
import { getFoodData } from '../../apiCalls/api';
import PropTypes from 'prop-types';
import FoodHolder from '../../containers/foodHolderContainer';
import { NavLink, Route, Switch } from 'react-router-dom';
import AppContainer from '../../containers/appContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      test: 'testing'
    };
  }

  makeFetchSweet = async () => {
    const url = `https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=sweet`;
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
  }

  makeFetchSavory = async () => {
    const url = 'https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=savory';
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
  }

  makeFetchNutty = async () => {
    const url = 'https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=nutty';
    const response = await getFoodData(url);
    const data = response;


    this.props.storeFood(data.recipes);
  }

  toggle = () => {
    this.setState({click: true})
  }

  render() {
    const { food } = this.props;

    const renderFood = <div>
      { food.length >0 ?
        <FoodHolder allState={this.state}/> :
        <div>
        </div>
      }
    </div>;
   
    
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
          {/* <NavLink to='/' onClick={this.toggle} className="App-title">SATISY</NavLink> */}
          <h1 className="App-title">SATISY</h1>
        
        {/* <Route exact path='/' component={} /> */}
        {/* <Route exact path='./Sweet' component={FoodHolder} /> */}

        <div>
          { food.length >0 ?
            <FoodHolder allState={this.state}/> :
            <div className="book">
              <span className="page turn"></span>
              <span className="page turn"></span>
              <span className="page turn"></span>
              <span className="page turn">~~~~~</span>
              <span className="page turn"></span>
              <span className="page turn flex-btn">
                <h1 className='book-title'>What're you craving?..</h1>
                {/* <NavLink to='./Sweet' 
              </NavLink> */}
                <button className='food-btn' onClick={this.makeFetchSweet}>SWEET</button>
                <button className='food-btn' onClick={this.makeFetchSavory}>SAVORY</button>
                <button className='food-btn' onClick={this.makeFetchNutty}>NUTTY</button>
              </span>
              <span className="cover"></span>
              <span className="page"></span>
              <span className="cover turn"></span>
            </div>
          }
        </div>
       
      </div>
    );
  }
}

export default App;
