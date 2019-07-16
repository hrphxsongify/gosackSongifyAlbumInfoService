import React from 'react';
import $ from 'jquery';
import TrackContainer from './TrackContainer.jsx';
import AlbumInfo from './AlbumInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAlbumData: {
        name: '',
        year: 0,
        tracks: []
      }
    };
  }

  componentDidMount() {
    const window = document.URL;
    const url = window[window.length - 1];
    $.ajax({
      type: 'get',
      url: `http://localhost:3002/api/albums/${url}`,
      success: albumData => {
        this.setState({
          currentAlbumData: albumData
        });
      },
      dataType: 'json'
    });
  }

  render() {
    return (
      <div>
        <AlbumInfo albumInfo={this.state.currentAlbumData} />
        <TrackContainer
          tracks={this.state.currentAlbumData.tracks}
          artist={this.state.currentAlbumData.artist}
        />
      </div>
    );
  }
}

export default App;
