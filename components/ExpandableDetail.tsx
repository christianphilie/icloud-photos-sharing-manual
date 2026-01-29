'use client';

import { useState } from 'react';

interface ExpandableDetailProps {
  children: React.ReactNode;
  label?: string;
}

export function ExpandableDetail({ 
  children, 
  label = 'Mehr Details' 
}: ExpandableDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-border pt-4 mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Details ausblenden' : 'Details anzeigen'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium">{label}</span>
      </button>
      
      <div
        className="grid"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
          transition: 'grid-template-rows 300ms ease-in-out, opacity 300ms ease-in-out',
        }}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-foreground-secondary mt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}