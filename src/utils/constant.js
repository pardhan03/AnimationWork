import { faker } from '@faker-js/faker';

faker.seed(12);


const featureTitles = [
  'Sunset View',
  'Free Wi-Fi',
  'Mountain View',
  'Pool Access',
  '24/7 Room Service',
  'Breakfast Included',
  'Pet Friendly',
  'Ocean View',
  'Private Balcony',
  'Air Conditioning',
];

export const mockData = [...Array(20).keys()].map(() => ({
    key: faker.string.uuid(),
    title: faker.music.artist(),
    image: faker.image.url(),
    bg: faker.color.rgb(),
    description: faker.lorem.sentences({min:1, max:3}),
    author: {
        name: faker.person.fullName(),
        avatar: faker.image.avatarGitHub(),
    },
}))

export const mockPlaces = [...Array(10).keys()].map(() => ({
  name: faker.location.city(),
  location: faker.location.country(),
  image: {
    uri: faker.image.urlPicsumPhotos(),
  },
  about: faker.lorem.sentence({ min: 30, max: 50 }),
}));

export const mockFeatures = [...Array(10).keys()].map(() => ({
  icon: faker.image.urlPicsumPhotos(),
  title: faker.helpers.arrayElement(featureTitles),
}));