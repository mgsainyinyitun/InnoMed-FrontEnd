import React from 'react';

const partners = [
  {
    id: 1,
    name: 'Johnson & Johnson',
    logo: 'https://images.unsplash.com/photo-1636207543865-acf3ad382295?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 2,
    name: 'Siemens Healthineers',
    logo: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 3,
    name: 'Philips Healthcare',
    logo: 'https://images.unsplash.com/photo-1635048424154-32e9c4d8e214?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 4,
    name: 'GE Healthcare',
    logo: 'https://images.unsplash.com/photo-1635048424587-cbca0010e0f3?auto=format&fit=crop&w=200&h=200&q=80',
  },
];

export function Partners() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted by Leading Healthcare Providers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-white rounded-full p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 w-24 mx-auto rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-medium text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}