import React from "react";
import Link from "next/link";

const fetchRecipeDetails = async (recipeId) => {
  const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`, {
    cache: "force-cache",
  });
  const data = await apiResponse.json();
  return data;
};

const RecipeDetails = async ({ params }) => {
  const recipe = await fetchRecipeDetails(params.details);
  return (
    <div className="m-5 max-w-6xl mx-auto p-5">
      <Link href="/recipe-list">
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
          Back to Recipe List
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-2">
        <div className="w-full md:w-2/3">
          <img src={recipe.image} className="object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-extrabold">{recipe.name}</h2>
          <p className="text-xl text-gray-750">{recipe.mealType[0]}</p>
          <p className="text-lg text-gray-750">{recipe.cuisine}</p>
          <h3 className="text-2xl font-bold">Ingredients</h3>
          <ul className="flex gap-2 text-lg flex-col p-3">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li className="list-disc" key={index}>
                  {ingredient}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
