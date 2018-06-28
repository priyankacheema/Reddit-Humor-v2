import React, { Component } from 'react';
import './App.css';
import {fetchProgrammerHumor} from '../../utils/fetchProgrammerHumor'
import * as parseUtils from '../../utils/parseUtils'

class App extends Component {
    // async componentDidMount() {
    //     const data = await fetchProgrammerHumor()
    //     console.log(data)
    //     const posts = parseUtils.getPosts(data)
    //     console.log(posts)
    //     posts.map((post) => {
    //         const image = parseUtils.generateImages(post)
    //         console.log(image)
    //         // console.log(parseUtils.getId(post))
    //     })
    //
    // }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
