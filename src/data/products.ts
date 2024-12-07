import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Digital Stethoscope',
    description: 'Advanced digital stethoscope with noise cancellation',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80',
    category: 'Diagnostic',
  },
  {
    id: 2,
    name: 'Surgical Mask Pack',
    description: '50 pieces of high-quality surgical masks',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80',
    category: 'PPE',
  },
  {
    id: 3,
    name: 'Blood Pressure Monitor',
    description: 'Automatic digital blood pressure monitor',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80',
    category: 'Monitoring',
  },
];