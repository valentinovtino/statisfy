import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/appContainer';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>, document.getElementById('root'));

