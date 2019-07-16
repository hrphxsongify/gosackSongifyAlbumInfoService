import React from 'react';

const Track = ({ track, artist }) => {
  const explicit = track.explicit ? 'Explicit' : '';
  const popularity = track.popularity ? 'ion-arrow-graph-up-right' : 'ion-arrow-graph-down-right';
  return (
    <div className="track">
      <div className="track__number">{track.number}</div>

      <div className="track__added">
        <i className="ion-checkmark-round added"></i>
      </div>

      <div className="track__title featured">
        <span className="title">{track.title}</span>
        <span className="feature">{artist}</span>
      </div>

      <div className="track__explicit">
        <span className="label">{explicit}</span>
      </div>

      <div className="track__length">{track.length}</div>

      <div className="track__popularity">
        <i className={popularity}></i>
      </div>
    </div>
  );
};

export default Track;
