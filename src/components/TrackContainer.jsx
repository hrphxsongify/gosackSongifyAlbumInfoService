import React from 'react';
import TrackHeading from './TrackHeading.jsx';
import Track from './Track.jsx';

const TrackContainer = ({ tracks, artist }) => {
  console.log(tracks);
  return (
    <div className="album__tracks">
      <div className="tracks">
        <TrackHeading />
        {tracks &&
          tracks.map(track => (
            <div key={track.number}>
              <Track track={track} artist={artist} />
            </div>
          ))}
        ;
      </div>
    </div>
  );
};

export default TrackContainer;
