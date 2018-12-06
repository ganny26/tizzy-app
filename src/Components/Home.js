import React, { Component } from 'react';
import '../Styles/App.scss';

class Home extends Component {
  render() {
    return (
      <div className="App-Header">
        <h1>Welcome to Home Component - {this.props.name}</h1>
      </div>
    );
  }
}

export default Home;