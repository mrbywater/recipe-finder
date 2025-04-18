export type Recipe = {
  id: number;
  title: string;
  image: string;
};

export type RecipesProps = {
  searchParams: {
    query?: string;
    cuisine?: string;
    preparationTime?: string;
  };
};
