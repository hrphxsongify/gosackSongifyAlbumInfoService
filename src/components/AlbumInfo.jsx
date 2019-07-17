import React from 'react';

const AlbumInfo = ({ albumInfo }) => {
  const imageId = albumInfo.id;
  const imageURL = albumInfo.name
    ? `https://maxsart.s3.us-east-2.amazonaws.com/l${imageId}.jpg`
    : '';

  return (
    <div className="album__info">
      <div className="album__info__art">
        <img src={imageURL} alt={albumInfo.name} />
      </div>

      <div className="album__info__meta">
        <div className="album__year">{albumInfo.year}</div>

        <div className="album__name">{albumInfo.name}</div>

        <div className="album__actions">
          <button className="button-light save">Save</button>

          <button className="button-light more">
            <i className="ion-ios-more"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
