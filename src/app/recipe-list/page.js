import Link from "next/link";
import React from "react";

const fetchRecipes = async () => {
  const apiResponse = await fetch("https://dummyjson.com/recipes", {
    cache: "force-cache",
  });
  const data = await apiResponse.json();
  return data.recipes;
};

const RecipeListPage = async () => {
  const recipes = await fetchRecipes();
  return (
    <div className="m-5 max-w-6xl mx-auto p-3">
      <h1 className="text-3xl font-bold mb-2">Recipes</h1>
      <Link href="/">
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-pink-500 rounded-lg h-[60px] mb-12">
          Go Back
        </button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 mx-auto items-center">
        {recipes &&
          recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
              <div className="border rounded-md  p-3 transition-all cursor-pointer">
                <div className="w-full hover:scale-[1.1] transition-all">
                  <img src={recipe.image} alt="" />
                </div>
                <div className="flex flex-col gap-4 py-3">
                  <p className="text-xl font-bold">{recipe.name}</p>
                  <div className="flex justify-between items-center w-[100%]">
                    <p className="text-lg text-gray-700">
                      Recipe: {recipe.rating}
                    </p>
                    <p className="font-bold text-xl text-gray-700">
                      {recipe.cuisine}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RecipeListPage;
