import Searchbar from "../../components/Searchbar";
import SearchPagination from "../../components/SearchPagination";
import RecipeToDisplay from "../../components/RecipeToDisplay";
import Spinner from "../../components/Spinner";
import SearchResults from "../../components/SearchResults";

import { GetStaticProps } from "next";

import { useEffect, useState } from "react";

import { IRecipe } from "../../utils/appReducer";

interface IRecipes {
  image_url: string;
  title: string;
  id: string;
}

interface PageProps {
  recipesInit: IRecipes[];
}

const Recipes = ({ recipesInit }: PageProps) => {
  const [userInput, setUserInput] = useState(""); //userInput from Search bar
  const [recipes, setRecipes] = useState(recipesInit); //fetched data for left side recipes list
  const [clickedRecipe, setClickedRecipe] = useState(); //get id

  //manage states in fetching data
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //pagination
  const resultsPerPage = 10;
  const [page, setPage] = useState(1);
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;
  const pages = Math.ceil(recipes?.length / resultsPerPage);

  //for search bar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //e.preventDefault();
    setUserInput(e.currentTarget.value);
  };

  const fetchSearchResults = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${userInput}`
      );
      const res = await response.json();

      //setData(res.data);
      //  if(cancelRequest) return;
      //setData(data);

      setRecipes(res.data.recipes);

      //setUserInput([]);
      setIsLoading(false);
    } catch (error) {
      // if(cancelRequest) return;
      setError(error);
      console.log(error);
    }
  };

  // const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   fetchSearchResults();
  //   e.preventDefault();
  // };

  //click on a recipe in the list to preview
  const handleRecipeClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setClickedRecipe(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  //navigate between search results
  const handlePageChange = (
    e: React.FormEvent<HTMLFormElement>,
    value: number
  ) => {
    setPage(value);
    console.log(page);
  };

  return (
    <div id="container">
      <div id="search-bar">
        <Searchbar
          value={userInput}
          onChange={handleChange}
          // onClick={handleOnSubmit}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            fetchSearchResults();
          }}
        />
      </div>
      <div id="results">
        {isLoading && <Spinner />}
        {error && <p>some error</p>}
        {!isLoading && !error && recipes.length === 0 && (
          <p>search an ingredient</p>
        )}
        {recipes.length > 0 && (
          <SearchResults
            recipes={recipes}
            end={end}
            start={start}
            onChange={(recipes: IRecipes) => recipes}
            // onClick={(e: React.ChangeEvent<HTMLFormElement>) =>
            //   setClickedRecipe(e.currentTarget.value)
            // }
          />
        )}

        <SearchPagination
          count={pages}
          onChange={handlePageChange}
          page={page}
          value={page}
        />
      </div>
      {/* <div id="recipe-display">
        {/* <RecipeToDisplay clickedRecipe={clickedRecipe} key={clickedRecipe} /> 
      </div> */}
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
          }

          div#container {
            display: grid;

            grid-template-rows: min-height 1fr;

            row-gap: 1rem;
          }

          div#search-bar {
            grid-row: 1/2;
          }

          div#results {
            grid-row: 2/3;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default Recipes;

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
  );

  const data = await res.json();

  //let results = data.results;
  const recipesInit = data.data.recipes;
  console.log(recipesInit);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      recipesInit,
    },
  };
};
