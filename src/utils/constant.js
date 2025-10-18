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

export const CircularSliderImageData = [
  'https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo=',
  'https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
  'https://img.freepik.com/free-photo/landscape-with-lake-sunset_395237-259.jpg?semt=ais_hybrid&w=740&q=80',
  'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4=',
  'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
  'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg',
  'https://media.istockphoto.com/id/483724081/photo/yosemite-valley-landscape-and-river-california.jpg?s=612x612&w=0&k=20&c=QQ7rvq0Qbfpkug1Wbd36PGqkOntoPFKWxiE4w4tV-NE=',
  'https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDpdESZq-3Wpj65-s4kbDNMSKFbW5eJUY2Q&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDdX4zyRAIoiiq1zPn51YvMIYst5Z-5MlVQ&s',
  'https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZ2vhLzIdtwpwXw90ZuWhngB-MdFsjD64CQ&s',
  'https://m.media-amazon.com/images/I/71EYovf8WhL._AC_UF894,1000_QL80_.jpg',
  'https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80',
  'https://images.stockcake.com/public/8/8/9/889c1161-ac90-403a-b63f-23d708e67520_large/sunset-mountain-landscape-stockcake.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7_VfK8IUWF7RvjP4hjmYVYZLEqjPtMO5jQ&s',
]