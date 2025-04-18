'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={router.back}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded cursor-pointer whitespace-nowrap"
    >
      ← Back
    </button>
  );
}
