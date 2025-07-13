
import type React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface Video {
  id: string;
  thumbnailUrl: string;
  title: string;
  platform: 'YouTube' | 'Twitch';
  views: string;
  uploaded: string;
}

export interface Game {
  id: number;
  name: string;
  imageUrl: string;
  steamUrl: string;
}