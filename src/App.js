import React from 'react';
import logo from './logo.svg';
import MainView from './views/main'
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const initialState = {
  establishments: []
}

const store = configureStore(initialState);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <MainView />
    </div>
    </Provider>
  );
}

export default App;
