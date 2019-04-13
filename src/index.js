import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'
import Stories from './Components/Stories'
import Counter from './Components/Counter'
import AppRouter from './routes'
function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app-root'))
