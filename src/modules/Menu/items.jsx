import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/',
    text: 'На головну',
  },
  {
    id: nanoid(),
    to: '/regestration',
    text: 'Реєстрація',
  },
];

export default items;
