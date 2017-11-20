import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          {/*<MyComponent name="velopert" />*/}
          <MyComponent name="velopert" favoriteNumber={1} />

      </div>
    );
  }
}

export default App;
