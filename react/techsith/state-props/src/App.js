//https://www.youtube.com/watch?v=DJtI3Pogd88&list=PL7pEw9n3GkoVAqCMVTz2mKthyWr-svpQJ&index=4
//https://github.com/techsithgit/react-understanding-state-props/tree/master/src
import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users/>
      </div>
    );
  }
}

export default App;
