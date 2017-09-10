import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import Header from './Header';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

import './App.css';

const API_KEY = 'AIzaSyAXyEamwfpKmQvyDlV0OXVGFV9Fhw8rSi4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
  }

  componentDidMount() {
    this.handleSearch('poop');
  }

  handleSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
