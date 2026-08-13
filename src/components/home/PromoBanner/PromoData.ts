import { vegetablesBanner, fruitsBanner,} from "../../../assets";

export interface Promo {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
}

export const promotions: Promo[] = [
  {
    id: 1,
    title: "Organic Vegetables",
    description: "Save up to 20% on fresh vegetables this week.",
    image: vegetablesBanner,
    buttonText: "Shop Vegetables",
    link: "/categories/vegetables",
  },
  {
    id: 2,
    title: "Fresh Fruits",
    description: "Discover juicy seasonal fruits delivered fresh.",
    image: fruitsBanner,
    buttonText: "Shop Fruits",
    link: "/categories/fruits",
  },
];