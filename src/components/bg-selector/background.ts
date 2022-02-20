import { LostArk, Cyberpunk2077, Botw, MhWorld } from '../../assets/bg';

interface Background {
  id: number;
  name: string;
  image: string;
}

const backgrounds: Array<Background> = [
  {
    id: 1,
    name: 'Lost Ark',
    image: LostArk,
  },
  {
    id: 2,
    name: 'Cyberpunk 2077',
    image: Cyberpunk2077,
  },
  {
    id: 3,
    name: 'Breath of the Wild',
    image: Botw,
  },
  {
    id: 4,
    name: 'Breath of the Wild',
    image: MhWorld,
  },
];

export { backgrounds, Background };
