import { bakeryImage, dairyImage, fruitsImage, vegetablesImage,} from "../../../assets";

export interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
  slug: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Vegetables",
    image: vegetablesImage,
    productCount: 42,
    slug: "vegetables",
  },
  {
    id: 2,
    name: "Fruits",
    image: fruitsImage,
    productCount: 36,
    slug: "fruits",
  },
  {
    id: 3,
    name: "Dairy",
    image: dairyImage,
    productCount: 18,
    slug: "dairy",
  },
  {
    id: 4,
    name: "Bakery",
    image: bakeryImage,
    productCount: 15,
    slug: "bakery",
  },
];