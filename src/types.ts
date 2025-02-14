export interface Image {
  id: string;
  urls: { regular: string; small: string };
  alt_description: string;
}

export interface Modal {
  src: string;
  alt: string;
}
