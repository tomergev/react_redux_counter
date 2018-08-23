import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'

import Counter from './Components/Counter'

class App extends Component {
  helloWorld() {
    console.log(`Hello World`)
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Counter helloWorld={this.helloWorld}/>
        </div>
      </Provider>
    );
  }
}

export default App;
