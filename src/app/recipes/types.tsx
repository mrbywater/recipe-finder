export type Recipe = {
  id: number;
  title: string;
  image: string;
};

export type RecipesProps = {
  searchParams: Promise<{
    query?: string;
    cuisine?: string;
    preparationTime?: string;
  }>;
};
