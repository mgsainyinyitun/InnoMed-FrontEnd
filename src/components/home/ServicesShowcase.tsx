import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { Link } from 'react-router-dom';

export function ServicesShowcase() {
  // Show only first 3 services on home page
  const featuredServices = services.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive medical supply solutions to support healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <service.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}