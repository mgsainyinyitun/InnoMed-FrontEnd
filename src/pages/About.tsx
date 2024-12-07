import React from 'react';
import { Heart, Shield, Truck } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About InnoMed</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          InnoMed is a leading provider of innovative medical and hospital supplies, 
          committed to delivering high-quality healthcare solutions to medical professionals worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
            <p className="text-gray-600">Committed to providing the highest quality medical supplies</p>
          </div>
          
          <div className="text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
            <p className="text-gray-600">Reliable partner for healthcare institutions worldwide</p>
          </div>
          
          <div className="text-center">
            <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Swift and secure delivery to your facility</p>
          </div>
        </div>
      </div>
    </div>
  );
}