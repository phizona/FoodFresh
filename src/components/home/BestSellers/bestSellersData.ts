import { products } from "../../../data/products";

export const bestSellers = products.filter(
  (product) => product.rating >= 4.8
);
// import { tomatoImage, appleImage, breadImage, milkImage, } from "../../../assets";
// import type { Product } from "../FeaturedProducts/featuredProductsData";

// export const bestSellers: Product[] = [
//   {
//     id: 5,
//     name: "Premium Tomatoes",
//     image: tomatoImage,
//     price: 5.99,
//     rating: 5,
//     badge: "Best Seller",
//   },
//   {
//     id: 6,
//     name: "Organic Apples",
//     image: appleImage,
//     price: 6.49,
//     rating: 4.9,
//     badge: "Popular",
//   },
//   {
//     id: 7,
//     name: "Whole Wheat Bread",
//     image: breadImage,
//     price: 3.49,
//     rating: 4.8,
//   },
//   {
//     id: 8,
//     name: "Fresh Milk",
//     image: milkImage,
//     price: 3.99,
//     rating: 5,
//     badge: "Top Rated",
//   },
// ];