export type ProductCategory =
  | 'AI Writing'
  | 'AI Image Generation'
  | 'AI Video'
  | 'AI Voice & Audio'
  | 'AI Coding'
  | 'AI Marketing'
  | 'AI Productivity'
  | 'AI Design'
  | 'Business AI'
  | 'AI Learning';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  iconName: string;
  iconBgColor?: string;
  badge?: string;
  isPopular?: boolean;
  isBestDeal?: boolean;
  isNew?: boolean;
  price: number; // 99
  currency: string; // '₹'
  features: string[];
  benefits: string[];
  howItWorks: string[];
  whoItIsFor: string[];
  faq: { question: string; answer: string }[];
  paymentUrl: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  duration: string;
  modulesCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  topics: string[];
  keyOutcomes: string[];
  price: number; // 99
  paymentUrl: string;
  iconName: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  comment: string;
  rating: number;
  purchasedProduct: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
