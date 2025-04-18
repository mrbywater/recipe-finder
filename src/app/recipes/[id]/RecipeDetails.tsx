import Image from 'next/image';
import { RecipeDetailsProps, RecipeDetailsType } from '@/app/recipes/[id]/types';

export default async function RecipeDetails({ params }: RecipeDetailsProps) {
  const paramsData = await params;
  const { id } = paramsData;

  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
  );

  if (!res.ok) {
    throw new Error('Ошибка при загрузке данных о рецепте');
  }

  const recipe: RecipeDetailsType = await res.json();

  return (
    <>
      <h1 className="text-lg md:text-3xl font-bold text-gray-600 mt-4 mb-2">{recipe.title}</h1>

      <div className="relative max-w-md h-64 mb-6">
        <Image src={recipe.image} alt={recipe.title} fill className="object-cover rounded-lg" />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-600">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-500">
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.original}</li>
          ))}
        </ul>
      </div>

      <div className="text-gray-600">
        <p>
          <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
      </div>

      <div className="mt-6 prose max-w-none">
        <h2 className="text-xl font-semibold mb-2 text-gray-600">Summary</h2>
        <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      </div>
    </>
  );
}
