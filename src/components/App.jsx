import React from 'react';
import TrackContainer from './TrackContainer.jsx';
import AlbumInfo from './AlbumInfo.jsx';

const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(`${JSON.stringify(this.props.albumData)} i'm here`);
    this.state = {
      // currentAlbumData: {
      //   name: '',
      //   year: 0,
      //   tracks: []
      // },
      currentAlbumData: this.props.albumData
    };
    console.log(`${JSON.stringify(this.state.currentAlbumData)}now i'm here`);
  }

  componentDidMount() {
    this.setState({
      currentAlbumData: this.state.currentAlbumData
    });
    console.log(this.props.albumData);

    // const window = document.URL;
    // const url = window[window.length - 1];
    // // $.ajax({
    // //   type: 'get',
    // //   url: `http://localhost:3002/api/albums/${url}`,
    // //   success: albumData => {
    // //     this.setState({
    // //       currentAlbumData: albumData
    // //     });
    // //   },
    // //   dataType: 'json'
    // // });
  }

  render() {
    console.log(`${this.state.currentAlbumData  } now i am herezies`);
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
