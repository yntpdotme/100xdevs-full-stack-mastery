// BirthdayCardData.js
import warmWishesImage from './backgrounds/warm_wishes.jpg';
import celebrationTimeImage from './backgrounds/celebration_time.jpg';
import partyOnImage from './backgrounds/party_on.jpg';

export const birthdayCards = [
  {
    id: 1,
    title: 'Celebration Time',
    message: `May your birthday be as sweet as cake, {{name}}!`,
    image: celebrationTimeImage,
  },
  {
    id: 2,
    title: 'Warm Wishes',
    message: `Wishing {{name}} a day filled with joy and happiness!`,
    image: warmWishesImage,
  },
  {
    id: 3,
    title: 'Party On!',
    message: `Cheers to another year of wonderful memories, {{name}}!`,
    image: partyOnImage,
  },
];
