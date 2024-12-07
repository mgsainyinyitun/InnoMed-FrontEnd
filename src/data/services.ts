import { Service } from '../types';
import { Stethoscope, Truck, Clock, HeartPulse, Microscope, UserCog } from 'lucide-react';

export const services: Service[] = [
  {
    id: 1,
    name: 'Medical Equipment Supply',
    description: 'High-quality medical equipment and supplies for healthcare facilities.',
    icon: Stethoscope
  },
  {
    id: 2,
    name: 'Emergency Delivery',
    description: '24/7 emergency delivery service for urgent medical supplies.',
    icon: Truck
  },
  {
    id: 3,
    name: 'Equipment Maintenance',
    description: 'Regular maintenance and calibration of medical equipment.',
    icon: UserCog
  },
  {
    id: 4,
    name: 'Healthcare Consulting',
    description: 'Expert consultation for medical facility setup and optimization.',
    icon: HeartPulse
  },
  {
    id: 5,
    name: 'Laboratory Solutions',
    description: 'Complete laboratory equipment and consumables supply.',
    icon: Microscope
  },
  {
    id: 6,
    name: '24/7 Support',
    description: 'Round-the-clock technical support for all our products.',
    icon: Clock
  }
];