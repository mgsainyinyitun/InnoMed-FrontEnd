import React from 'react';
import { Mail, MapPin, Phone, Clock, Globe } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">
              123 Medical Center Drive<br />
              Healthcare City, HC 12345<br />
              United States
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">
              Main: +1 (555) 123-4567<br />
              Support: +1 (555) 987-6543
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">
              General: contact@innomed.com<br />
              Support: support@innomed.com
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Coverage Area</h3>
            <p className="text-gray-600">
              Nationwide delivery and support<br />
              International shipping available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}