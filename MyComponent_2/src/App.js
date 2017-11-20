import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Container from './Container';

class App extends Component {
  render() {
    return (
        <Container title="Welcome">
          <MyComponent/>
        </Container>
    );
  }
}

export default App;
