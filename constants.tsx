
import React from 'react';
import type { Game, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/andrea.sohigh.5',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.23v2.355H7.22v3.209h2.859v8.196h3.318z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCNxWiktsb9MOQxuZDdYrtxw',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export const GAMES_LIST: Game[] = [
  {
    id: 1,
    name: 'Little Nightmares II',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/860510/header.jpg',
    steamUrl: 'https://store.steampowered.com/app/860510/Little_Nightmares_II/',
  },
  {
    id: 2,
    name: 'Battlefield 3',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1238820/header.jpg',
    steamUrl: 'https://store.steampowered.com/app/1238820/Battlefield_3/',
  },
  {
    id: 3,
    name: 'Poppy Playtime',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1721470/header.jpg',
    steamUrl: 'https://store.steampowered.com/app/1721470/Poppy_Playtime/',
  },
  {
    id: 4,
    name: 'Little Nightmares',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg',
    steamUrl: 'https://store.steampowered.com/app/424840/Little_Nightmares/',
  },
];