import {
  tomatoImage,
  milkImage,
  breadImage,
  appleImage,
} from "../assets";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  badge?: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    image: tomatoImage,
    price: 4.99,
    rating: 5,
    badge: "Organic",
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Fresh Milk",
    image: milkImage,
    price: 3.5,
    rating: 4.8,
    badge: "Fresh",
    category: "Dairy",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    image: breadImage,
    price: 2.99,
    rating: 4.7,
    category: "Bakery",
  },
  {
    id: 4,
    name: "Red Apples",
    image: appleImage,
    price: 5.2,
    rating: 4.9,
    badge: "Best Seller",
    category: "Fruits",
  },
];