import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <RouterLink
      to={href}
      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
    >
      {children}
    </RouterLink>
  );
}