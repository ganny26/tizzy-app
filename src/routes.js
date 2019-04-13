import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = React.lazy(() => import('./Components/Home'))
const Counter = React.lazy(() => import('./Components/Counter'))
const Stories = React.lazy(() => import('./Components/Stories'))

const AppRouter = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={() => <Home name="Selva" />} />
          <Route path="/about" component={Counter} />
          <Route path="/contact" component={Stories} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default AppRouter
