'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ParamsType } from '@/app/types';

export default function Home() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!!query || !!cuisine || !!preparationTime);
  }, [query, cuisine, preparationTime]);

  const handleNext = () => {
    const params: ParamsType = {};
    if (query) params.query = query;
    if (cuisine) params.cuisine = cuisine;
    if (preparationTime) params.preparationTime = preparationTime;
    const search = new URLSearchParams(params).toString();

    router.push(`/recipes?${search}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-600">Recipe Finder</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Search Recipe</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pasta"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm text-gray-600 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Cuisine</label>
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm text-gray-600 p-2"
            >
              <option value="">-- Select --</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Max preparation time in min
            </label>
            <input
              type="number"
              min={1}
              value={preparationTime}
              placeholder="0"
              onChange={(e) => setPreparationTime(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm text-gray-600 p-2"
            />
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={!enabled}
          className={`mt-6 w-full py-2 rounded-lg text-white transition font-semibold ${enabled ? 'bg-blue-500 hover:bg-blue-400' : ' bg-gray-400 '} `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
