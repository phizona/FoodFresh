import {Headset, ShieldCheck, Truck, Clock, DollarSign, Package, ShoppingBasket, CheckCircle} from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Convenience",
    description: "We allow you to shop from the comfort of your home or workplace, saving you the time and stress of visiting physical stores or markets.",
    icon: ShoppingBasket,
  },

  {
    id: 2,
    title: "Wide Product Range",
    description: "We provide a wide range of farm fresh food items, food products, groceries, and household essentials, providing you with extensive choices to meet your culinary and home needs.",
    icon: Package,
  },

  {
    id: 3,
    title: "Quality Assurance",
    description: "We are committed to providing high quality products with every order. We offer a return or refund within 6 hours of delivering your order. Terms and conditions apply.",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "Cost Savings",
    description: "We offer competitive prices and deals, helping you save money on your grocery bills.",
    icon: DollarSign,
  },

  {
    id: 5,
    title: "Time Efficiency",
    description: "Shopping on FoodFresh is a time-efficient process. You can quickly browse products, add them to your cart, schedule an order, reorder a previous order and complete your purchase in just a few clicks. ",
    icon: Clock,
  },

  {
    id: 6,
    title: "Fast Delivery",
    description: "We have various delivery options, including same day and next day delivery, allowing you choose the most convenient time for your groceries to arrive .",
    icon: Truck,
  },

  {
    id: 7,
    title: "Secure Payments",
    description: "Enjoy safe and reliable checkout with trusted payment methods.",
    icon: ShieldCheck,
  },

  {
    id: 8,
    title: "24/7 Support",
    description:  "Our customer support team is always ready to assist whenever you need help.",
    icon: Headset,
  },
];