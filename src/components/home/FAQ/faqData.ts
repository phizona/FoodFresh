export interface FAQItemData {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItemData[] = [
  {
    id: 1,
    question: "How quickly will my groceries arrive?",
    answer:
      "Most orders are delivered within the same day or the next available delivery slot depending on your location.",
  },
  {
    id: 2,
    question: "Are your products always fresh?",
    answer:
      "Yes. We carefully source fresh fruits, vegetables, dairy, bakery products and pantry essentials from trusted suppliers every day.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept major debit cards, credit cards and secure online payment options.",
  },
  {
    id: 4,
    question: "Can I return damaged products?",
    answer:
      "Absolutely. If any item arrives damaged or doesn't meet our quality standards, contact our support team and we'll arrange a replacement or refund.",
  },
];