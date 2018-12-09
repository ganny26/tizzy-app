import React from 'react';
import _ from 'lodash';

const TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
const ITEM_STORIES = (item) => `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`;

class Stories extends React.Component {

  state = {
    stories: [],
    rd: null
  }

  async componentWillMount() {
    let response = await fetch(TOP_STORIES)
    let result = await response.json()
    this.setState({
      stories: _.slice(result, 0, 10)
    }, () => {
      this.getStories()
    })
  }

  getStories = async () => {
    var items = this.state.stories.map(async (all, item) => {
      let rur = ITEM_STORIES(item);
      let response = await fetch(rur)
      return response.json();
    })
    let x = await Promise.all(items);
    this.setState({
      rd: x
    })
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

export default Stories;