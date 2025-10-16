import { faker } from '@faker-js/faker';

faker.seed(12);

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