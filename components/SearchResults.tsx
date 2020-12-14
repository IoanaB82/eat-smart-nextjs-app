import RecipeList from "./RecipeList";

const SearchResults = (props) => {
  return props.recipes
    .slice(props.start, props.end)
    .map((recipe) => <RecipeList recipe={recipe} key={recipe.id} />);
};
export default SearchResults;
