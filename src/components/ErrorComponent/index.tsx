'use client';

import { useEffect } from 'react';
import { ErrorProps } from '@/components/ErrorComponent/types';
import BackButton from '@/components/BackButton';

export default function ErrorComponent({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Something went wrong', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center text-red-600 p-4">
      <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
      <p className="mb-4">{error.message || 'Error'}</p>
      <div className="flex gap-3  text-white">
        <BackButton />
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded cursor-pointer transition"
          onClick={reset}
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
