export type ProductCategory =
  | 'red-dot'
  | 'riflescope'
  | 'laser-sight'
  | 'accessory';

export interface Product {
  id: string;
  name: string;
  model: string;
  category: ProductCategory;
  price: number;
  salePrice?: number;
  image: string;
  images?: string[];
  description: string;
  features: string[];
  specifications?: Record<string, string>;
  inStock: boolean;
  featured?: boolean;
}
