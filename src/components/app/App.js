import React, { Component } from 'react';
import './App.css';
import { getFoodData } from '../../apiCalls/api'
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }

  makeFetch = async () => {
    const url = 'https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=savory'
    const response = await getFoodData(url);
    const data = response;

    // console.log(data)
    this.props.storeFood(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SATISY</h1>
        </header>
        <button onClick={this.makeFetch}>SWEET</button>
        <button>SAVORY</button>
        <button>NUTTY</button>
       
      </div>
    );
  }
}

export default App;
