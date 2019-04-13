import React from 'react'
import _ from 'lodash'
import { ITEM_STORIES, TOP_STORIES } from '../Constant'

class Stories extends React.Component {
  abortController = new AbortController()
  state = {
    stories: [],
    rd: null
  }

  async componentDidMount() {
    try {
      let response = await fetch(TOP_STORIES, {
        signal: this.abortController.signal
      })
      let result = await response.json()
      this.setState(
        {
          stories: _.slice(result, 0, 10)
        },
        () => {
          this.getStories()
        }
      )
    } catch (err) {
      if (err.name === 'AbortError') return
      throw error
    }
  }

  getStories = async () => {
    var items = this.state.stories.map(async (all, item) => {
      let rur = ITEM_STORIES(item)
      let response = await fetch(rur)
      return response.json()
    })
    let x = await Promise.all(items)

    this.setState({
      rd: x
    })
  }

  componentWillUnmount() {
    this.abortController.abort()
  }

  render() {
    if (this.state.rd === null) {
      return <p>Loading...</p>
    } else {
      return this.state.rd.map((v, i) => {
        if (v) {
          return <h5 key={i}>{v.title}</h5>
        }
      })
    }
  }
}

export default Stories
