import React from 'react';
import axios from 'axios';
import _ from 'lodash';
class Stories extends React.Component {

  state = {
    stories:[],
    rd:null
  }


   async componentWillMount(){
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    let result = await response.json()
    this.setState({
      stories:_.slice(result,0,10)
    },()=>{
      this.getStories()
    })
  }

  getStories = async () => {
     var items = this.state.stories.map(async (all,item)=>{
      let rur = `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`;
      let response = await fetch(rur)
      return response.json();  
    })
    let x = await Promise.all(items);
    this.setState({
      rd:x
    })
  }
    

  render() {
    if(this.state.rd === null){
      return <p>Loading...</p>
    }else{
      return this.state.rd.map((v,i)=>{
        if(v){
          return <h5 key={i}>{v.title}</h5>
        }
      })
    }
  }
}

export default Stories;