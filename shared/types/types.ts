export interface dataProdottiTypes {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: number;
}

export interface dataProdottoTypes {
  id: number;
  name: string;
  slug: string;
  longDescription: string;
  materials: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  colors: string[];
  gallery: string[];
  availability: string;
  deliveryTime: string;
  rating: number;
  reviews: number;
  translations: {
    it?: {
      slug: string;
      id: number;
    };
    es?: {
      slug: string;
      id: number;
    };
    en?: {
      slug: string;
      id: number;
    };
  };
}
