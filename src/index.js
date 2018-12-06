import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';


function App() {
  return (
    <div>
      <Home name="Selvaganesh"/>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('app-root'));