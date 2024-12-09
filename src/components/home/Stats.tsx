import React from 'react';
import { Users, Globe2, Award, Building2 } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Healthcare Providers',
    value: '1000+',
    icon: Building2,
    description: 'Trusted by leading hospitals',
  },
  {
    id: 2,
    name: 'Global Presence',
    value: '50+',
    icon: Globe2,
    description: 'Countries served worldwide',
  },
  {
    id: 3,
    name: 'Satisfied Clients',
    value: '25K+',
    icon: Users,
    description: 'Happy healthcare professionals',
  },
  {
    id: 4,
    name: 'Quality Awards',
    value: '100+',
    icon: Award,
    description: 'Industry recognitions',
  },
];

export function Stats() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-xl font-semibold text-blue-100 mb-1">{stat.name}</p>
              <p className="text-blue-200">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}