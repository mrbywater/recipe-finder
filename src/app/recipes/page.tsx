import BackButton from '@/components/BackButton';
import { RecipesProps } from '@/app/recipes/types';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import RecipesList from '@/app/recipes/RecipesList';

export default async function RecipesPage({ searchParams }: RecipesProps) {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="flex items-center mb-6">
        <BackButton />
        <h1 className="text-3xl font-bold text-gray-600 ml-4">Recipes</h1>
      </div>
      <Suspense fallback={<Loading />}>
        <RecipesList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
