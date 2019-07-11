const faker = require('faker');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const dateType = new Date(faker.date.past());

// artist
console.log(`Album Name: ${faker.company.bsAdjective()} ${faker.company.bsNoun()}`);
// album name
console.log(`Artist: ${faker.company.catchPhraseAdjective()} ${faker.company.catchPhraseNoun()}`);
// songs
for (let i = 0; i < getRandomArbitrary(2, 12); i++) {
  console.log(`Track: ${i + 1} Song: ${faker.company.bs()}`);
}

// year
console.log(`Year: ${dateType.getFullYear()}`);
// genre
console.log(`Genre: ${faker.name.jobDescriptor()}`);
