import React, { Component } from 'react'
import '../Styles/App.scss'
import PropTypes from 'prop-types'
class Home extends Component {
  render() {
    return (
      <div className="App-Header">
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

Home.propTypes = {
  name:PropTypes.string
}
export default Home
