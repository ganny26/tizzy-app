import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'
import Stories from './Components/Stories'
import Counter from './Components/Counter'
function App() {
  return (
    <div>
      <Home name="Hacker News List" />
      <Stories />
      <Counter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app-root'))
