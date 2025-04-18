import Link from 'next/link';
import Image from 'next/image';
import { Recipe, RecipesProps } from '@/app/recipes/types';

export const revalidate = 60;

export default async function RecipesList({ searchParams }: RecipesProps) {
  const searchParamsData = await searchParams;
  const { query, cuisine, preparationTime } = searchParamsData;

  const params = new URLSearchParams();
  if (query) params.set('query', query);
  if (cuisine) params.set('cuisine', cuisine);
  if (preparationTime) params.set('maxReadyTime', preparationTime);
  params.set('apiKey', process.env.SPOONACULAR_API_KEY!);

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
    { next: { revalidate } }
  );

  if (!res.ok) {
    throw new Error(`Ошибка при загрузке рецептов: ${res.statusText}`);
  }

  const data: { results: Recipe[] } = await res.json();
  const recipes = data.results;

  if (recipes?.length === 0) {
    return <p className="text-gray-600">Ничего не найдено.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
      {recipes.map((r, index) => (
        <Link
          key={r.id}
          href={`/recipes/${r.id}`}
          className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <div className="relative w-full h-48">
            <Image src={r.image} alt={r.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-600 truncate" title={r.title}>
              {r.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
