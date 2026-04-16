export type TourStop = {
  name: string;
  time: string;
  description: string;
};

export type TourData = {
  city: string;
  country: string;
  title: string;
  description: string;
  stops: TourStop[];
};

export type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export type UnsplashImage = {
  urls: {
    regular: string;
  };
  blur_hash: string;
};

export type UnsplashSearchResult = {
  images: UnsplashImage[];
  photo: string | undefined;
  blurHash: string | undefined;
};
