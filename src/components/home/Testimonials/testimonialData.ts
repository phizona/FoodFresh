import {customerOne, customerTwo, customerThree,} from "../../../assets";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Customer",
    image: customerOne,
    rating: 5,
    review:
      "FoodFresh always delivers fresh vegetables and fruits. The quality is excellent and delivery is always on time.",
  },
  {
    id: 2,
    name: "Daniel Smith",
    role: "Verified Customer",
    image: customerTwo,
    rating: 5,
    review:
      "Shopping has never been easier. Everything arrives fresh and carefully packaged.",
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "Verified Customer",
    image: customerThree,
    rating: 5,
    review:
      "I love the variety of products available. Their customer service is also fantastic.",
  },
];