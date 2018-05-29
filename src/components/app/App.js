import React, { Component } from 'react';
import './App.css';
import { getFoodData } from '../../apiCalls/api'

class App extends Component {
  constructor(props) {
    super(props)
  }

  makeFetch = async () => {
    const url = 'https://food2fork.com/api/search?key=e3e6267f800bf94ed1db6763e826e406&q=savory'
    const response = await getFoodData(url)
    const data = response
    // console.log("heyyy")
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
