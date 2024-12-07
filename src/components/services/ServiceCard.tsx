import React from 'react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center mb-4">
        <service.icon className="w-12 h-12 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{service.name}</h3>
      <p className="text-gray-600 text-center">{service.description}</p>
    </div>
  );
}