import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import Stories from './Components/Stories';

function App() {
  return (
    <div>
      <Home name="Your are rendering gziped files"/>
      <Stories/>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('app-root'));