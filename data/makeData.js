const faker = require('faker');
const fs = require('fs');
const path = require('path');

const albums = [];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 100; i++) {
  const album = {};
  album.tracks = {};

  // id
  album.id = i;
  // artist
  album.name = `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`;
  // album name
  album.artist = `${faker.company.catchPhraseAdjective()} ${faker.company.catchPhraseNoun()}`;

  // songs
  for (let i = 0; i < getRandomArbitrary(2, 12); i++) {
    album.tracks[i + 1] = `${faker.company.bs()}`;
  }

  // year
  album.year = Math.floor(getRandomArbitrary(1921, 2019));

  // genre
  album.genre = `${faker.name.jobDescriptor()}`;

  albums.push(album);
}
fs.writeFile('albums.json', JSON.stringify(albums), err => {
  if (err) throw err;
  console.log('Saved');
});
