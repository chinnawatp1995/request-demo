'use client';

import { Button } from '@/components/ui/button';

interface SuccessMessageProps {
  onReset: () => void;
}

export function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md text-center shadow-lg">
      {/* Success Icon */}
      <div className="w-16 h-16 mx-auto mb-4 text-green-500">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 0 0 0 0 0 0 0-4-4m1.414-5.586L5 5l5-5 5-5-1.414L5 5l-5-5 5 5 1.414L5 5l5 5-5 5-5-1.414z" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold text-[#2C2421] mb-2" style={{ fontFamily: 'Figtree, sans-serif' }}>
        Thank you for your request!
      </h2>
      
      <p className="text-[#78716D] mb-6" style={{ fontFamily: 'Figtree, sans-serif' }}>
        We'll be in touch within 24 hours to discuss your demo.
      </p>
      
      <Button
        onClick={onReset}
        variant="outline"
        className="w-full"
      >
        Submit another request
      </Button>
    </div>
  );
}