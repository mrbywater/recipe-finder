import Image from 'next/image';
import BackButton from '@/components/BackButton';
import { RecipeDetailsProps } from '@/app/recipes/[id]/types';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import RecipeDetailsComponent from '@/app/recipes/[id]/RecipeDetailsComponent';

export default function RecipeDetailsPage({ params }: RecipeDetailsProps) {
  return (
    <div className="min-h-screen p-8 bg-white">
      <BackButton />
      <Suspense fallback={<Loading />}>
        <RecipeDetailsComponent params={params} />
      </Suspense>
    </div>
  );
}
