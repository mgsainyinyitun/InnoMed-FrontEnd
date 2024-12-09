import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { ServicesShowcase } from '../components/home/ServicesShowcase';
import { Partners } from '../components/home/Partners';
import { Stats } from '../components/home/Stats';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProducts />
      <ServicesShowcase />
      <Partners />
      <Testimonials />
      <CallToAction />
    </>
  );
}