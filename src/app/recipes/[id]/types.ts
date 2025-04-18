export type RecipeDetailsType = {
  title: string;
  image: string;
  extendedIngredients: {
    id: number;
    original: string;
  }[];
  readyInMinutes: number;
  servings: number;
  summary: string;
};

export type RecipeDetailsProps = {
  params: {
    id: string;
  };
};
