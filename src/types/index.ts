import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon;
}