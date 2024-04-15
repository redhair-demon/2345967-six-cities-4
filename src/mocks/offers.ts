import { Offer } from '../types/offer';
import { APARTMENTS_MOCK } from './images';
import { REVIEWS_MOCK } from './rewiews';
import { POINTS_MOCK } from './points';
import { CITIES_MOCK } from './cities';

export const OFFERS_MOCK: Offer[] = [
  {
    id: 1,
    city: CITIES_MOCK[0],
    price: 200,
    name: 'Luxury Hotel',
    rating: 4.5,
    reviews: [REVIEWS_MOCK[0], REVIEWS_MOCK[4]],
    isFavorite: true,
    isPremium: true,
    photos: [APARTMENTS_MOCK[0], APARTMENTS_MOCK[1]],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    point: POINTS_MOCK[0]
  },
  {
    id: 2,
    city: CITIES_MOCK[5],
    price: 150,
    name: 'Eiffel Tower View Hotel',
    rating: 4.2,
    reviews: [],
    isFavorite: false,
    isPremium: false,
    photos: [APARTMENTS_MOCK[0], APARTMENTS_MOCK[2]],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    point: POINTS_MOCK[4]
  },
  {
    id: 3,
    city: CITIES_MOCK[0],
    price: 180,
    name: 'Sakura Hotel',
    rating: 4.7,
    reviews: [REVIEWS_MOCK[2]],
    isFavorite: true,
    isPremium: true,
    photos: [APARTMENTS_MOCK[2], APARTMENTS_MOCK[1]],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    point: POINTS_MOCK[2]
  },
  {
    id: 4,
    city: CITIES_MOCK[1],
    price: 160,
    name: 'River Thames Hotel',
    rating: 4.0,
    reviews: [REVIEWS_MOCK[1]],
    isFavorite: false,
    isPremium: false,
    photos: [APARTMENTS_MOCK[1], APARTMENTS_MOCK[2]],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    point: POINTS_MOCK[6]
  },
  {
    id: 5,
    city: CITIES_MOCK[0],
    price: 170,
    name: 'Sunny Beach Hotel',
    rating: 4.3,
    reviews: [REVIEWS_MOCK[3]],
    isFavorite: true,
    isPremium: false,
    photos: [APARTMENTS_MOCK[0], APARTMENTS_MOCK[2]],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    point: POINTS_MOCK[1]
  },
  {
    id: 6,
    city: CITIES_MOCK[5],
    price: 120,
    name: 'Another Eiffel Tower View Hotel',
    rating: 3.5,
    reviews: [],
    isFavorite: false,
    isPremium: false,
    photos: [APARTMENTS_MOCK[1], APARTMENTS_MOCK[2]],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    point: POINTS_MOCK[5]
  }
];