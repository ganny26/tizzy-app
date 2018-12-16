import React, { useState } from 'react'
import '../Styles/App.scss'
import { hot } from 'react-hot-loader'
const Warning = React.lazy(() => import('./Warning'))
// import Warning from './Warning';
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className={count > 5 ? 'alert' : null}>{count}</h1>

      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      {count > 5 ? (
        <React.Suspense fallback={<p>Loading...</p>}>
          <Warning />
        </React.Suspense>
      ) : null}
    </div>
  )
}

export default hot(module)(Counter)
