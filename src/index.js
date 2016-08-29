import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDrd6D8nmtsMLp8xTYu_0MPJSQegpM9QzA';

// Other Syntax:
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'skateboard'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

// Take the component's generated HTML and put it in the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// Functional Based Component. This component should produce some HTML
// const App = React.createClass ({
//   constructor: function(props) {
//     super(props);
//
//     this.state = { videos: [] };
//
//     YTSearch({key: API_KEY, term: 'skateboard'}, (videos) => {
//       this.setState({ videos }); // this.setState({ videos: videos }) in ES5
//     });
//   }
//
//   render: function() {
//    return (
//      <div>
//        <SearchBar />
//        <VideoList videos={this.state.videos} />
//      </div>
//    );
//   }
// });
