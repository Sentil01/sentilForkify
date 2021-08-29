import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import icons from 'url:../img/icons.svg';
const search = document.querySelector('.search');
const searchContainer = document.querySelector('.search-results');
const recipeContainer = document.querySelector('.recipe');
const showRecipe = async function () {
  //get id
  const id = window.location.pathname.slice(1);
  console.log(id);
  if (!id) return;
  //render recipe
  await model.loadRecipe(id);
  console.log(model.state.recipe);
  const { recipe } = model.state;
  //display recipe
  recipeView.render(recipe);
};
const searchRecipe = async function () {
  //get input
  const query = searchView._getQuery();
  console.log(query);
  // if (!query) return;
  //render recipes
  model.state.search.query = query;
  await model.loadSearch(query);
  console.log(model.state.search.recipes);
  const { recipes } = model.state.search;
  //display results
  searchView.render(recipes);
};
const init = function () {
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(searchRecipe);
};
init();
