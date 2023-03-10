import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: []
    };

    this.getYouTubeVideos('react tutorials');
  }

  getYouTubeVideos(query) {
    searchYouTube(query, videos => this.setState(
      {
        currentVideo: videos[0],
        videos: videos
      }
    ));
  }



  handleVideoListEntryTitleClick(video) {
    this.setState({ currentVideo: video });
  }

  render() {

    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)} />

          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
