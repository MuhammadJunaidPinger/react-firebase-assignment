import React, { Component } from 'react';
import './App.css';
import Router from './Config/Router';
import { Provider } from 'react-redux';
import { store, persistor } from './Store';
// import {Fab} from 'react-floating-action-button' 
import { PersistGate } from 'redux-persist/integration/react'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <header className="App-header">
          <h1 ><b>Q App</b></h1>
          <Router />
        </header>
      </div>
      </PersistGate>
      </Provider>
    );
  }
}

export default App;

/*
fetch('https://opentdb.com/api.php?amount=10')
.then(res => res.json())
.then(res => console.log(res))

*/