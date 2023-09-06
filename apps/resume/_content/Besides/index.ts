import data from './data.json';

export interface Link {
  title: string;
  url: string;
}

export interface Song {
  title: string;
  spotifyEmbedLink: string;
}

export interface BesidesData {
  friendsLinks: Link[];
  songs: Song[];
}

export { data };
