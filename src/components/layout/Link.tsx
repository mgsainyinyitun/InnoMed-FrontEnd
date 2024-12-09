import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <RouterLink
      to={href}
      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-blue-600 font-semibold'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
      {isActive && (
        <div className="h-0.5 bg-blue-600 mt-0.5 transition-all duration-200" />
      )}
    </RouterLink>
  );
}