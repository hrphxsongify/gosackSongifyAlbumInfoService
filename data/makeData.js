const faker = require('faker');
const fs = require('fs');
const path = require('path');

const albums = [];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 100; i++) {
  const album = {};
  album.tracks = [];

  // id
  album.id = i;
  // artist
  album.name = `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`;
  // album name
  album.artist = `${faker.company.catchPhraseAdjective()} ${faker.company.catchPhraseNoun()}`;

  // songs
  for (let j = 0; j < getRandomArbitrary(2, 12); j++) {
    const track = {};
    track.title = `${faker.company.bs()}`;
    track.number = j + 1;
    track.length = `${getRandomArbitrary(1, 19)}:${getRandomArbitrary(10, 59)}`;
    track.explicit = getRandomArbitrary(0, 2);
    track.popularity = getRandomArbitrary(0, 2);
    album.tracks.push(track);
  }

  // year
  album.year = Math.floor(getRandomArbitrary(1970, 2019));

  // genre
  album.genre = `${faker.name.jobDescriptor()}`;

  albums.push(album);
}
fs.writeFile('albums.json', JSON.stringify(albums), err => {
  if (err) throw err;
  console.log('Saved');
});
