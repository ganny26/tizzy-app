import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import Stories from './Components/Stories';

function App() {
  return (
    <div>
      <Home name="Hacker News List" />
      <Stories />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));
