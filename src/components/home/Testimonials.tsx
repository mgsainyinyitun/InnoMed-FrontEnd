import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Chief of Surgery',
    hospital: 'Metropolitan General Hospital',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'InnoMed has consistently provided us with top-quality medical supplies. Their reliability and customer service are outstanding.',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Medical Director',
    hospital: 'Pacific Healthcare Center',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: "The quality and innovation of InnoMeds products have significantly improved our patient care capabilities.",
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Head of Cardiology',
    hospital: 'Heart & Vascular Institute',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Working with InnoMed has been a game-changer for our department. Their advanced medical equipment is exceptional.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Healthcare Professionals Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-600">{testimonial.hospital}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}