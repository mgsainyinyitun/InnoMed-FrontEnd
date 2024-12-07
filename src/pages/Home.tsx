import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { ServicesShowcase } from '../components/home/ServicesShowcase';

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ServicesShowcase />
    </>
  );
}