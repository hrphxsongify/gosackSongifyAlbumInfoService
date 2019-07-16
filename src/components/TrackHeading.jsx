import React from 'react';

const TrackHeading = () => {
  return (
    <div className="tracks__heading">
      <div className="tracks__heading__number">#</div>

      <div className="tracks__heading__title">Song</div>

      <div className="tracks__heading__length">
        <i className="ion-ios-stopwatch-outline"></i>
      </div>

      <div className="tracks__heading__popularity">
        <i className="ion-thumbsup"></i>
      </div>
    </div>
  );
};

export default TrackHeading;
