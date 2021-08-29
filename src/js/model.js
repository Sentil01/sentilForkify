export const state = {
  recipe: {},
  search: {
    query: '',
    recipes: [],
  },
};
export const loadRecipe = async function (id) {
  const r = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const d = await r.json();
  console.log(d);
  console.log('model');

  const { recipe } = d.data;
  console.log(recipe);
  state.recipe = recipe;
  console.log(state.recipe);
};
export const loadSearch = async function (name) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${name}`
  );
  const data = await res.json();
  console.log(data);
  const { recipes } = data.data;
  console.log(recipes);
  state.search.recipes = recipes;
  console.log(state.search.recipes);
  console.log(state);
};
