import { useRouter } from "next/router";
import Spinner from "../../components/Spinner";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";
import ScheduleIcon from "@material-ui/icons/Schedule";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
//import Bookmark from "../../droppedFiles/Bookmark";

import { useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";

const Recipe = ({ recipe }) => {
  const [checked, setChecked] = useState(false);
  const [isSelected, setIsSelected] = useState();
  const router = useRouter();
  if (router.isFallback) return <Spinner />;

  const handleChange = (e) => {
    e.preventDefault();
    setChecked((checked) => !checked);
  };
  return (
    <>
      <div id="recipe-content">
        <figure>
          <img
            id="recipe-image"
            src={recipe.image_url}
            alt={recipe.title.replace("amp;", "")}
            onError={(i) => (i.target.src = "noimg.png")}
          ></img>
          <h2 id="recipe-title">{recipe.title.replace("amp;", "")}</h2>
        </figure>

        <div id="recipe-details">
          <span style={{ marginRight: "1rem" }}>
            <ScheduleIcon color="primary" /> {recipe.cooking_time} minutes
          </span>
          <span>
            <RestaurantIcon color="primary" /> {recipe.servings} servings
          </span>
          <span>{/* <Bookmark color="primary" recipe={recipe} /> */}</span>
        </div>
        <div id="recipe-ingredients">
          <h4>Ingredients List</h4>
          <div id="ingredients-list">
            {recipe.ingredients.map((ingredient, idx) => {
              return (
                <div id="ingredient-el" key={idx}>
                  <EcoIcon color="primary" fontSize="small" />

                  <div id="ingredient-quantity">{ingredient.quantity}</div>
                  <div id="ingredient-desc">
                    <span>{ingredient.unit}</span> {ingredient.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="recipe-method">
          <h4>Cooking directions</h4>
          <p>
            To see how to cook the recipe you have to navigate to the
            publisher's website.
          </p>
          <div id="#button">
            <Button
              variant="contained"
              color="primary"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                window.open(recipe.source_url, "_blank");
              }}
              size="medium"
              endIcon={<ArrowForwardIcon />}
              style={{ display: "flex", margin: "0 auto" }}
            >
              Directions
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        div#recipe-content {
          max-width: 40rem;
          align-self: center;
        }
        figure {
          height: 16rem;
          width: 100%;
          position: relative;
          top: 0;
          display: block;
          margin-inline-start: 0;
          margin-block-start: 0;
          margin-block-end: 0;
        }
        figure:before {
          display: block;
          height: 100%;
          width: 100%;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
          opacity: 0.2;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        h2 {
          width: 70%;
          text-transform: uppercase;
          font-size: 1.5rem;
          text-align: center;
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          padding: 1rem;
          color: #fff;
          background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
        }

        div#recipe-details {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 5rem 2rem 5rem;
          margin-top: 0;
          color: #615551;
        }

        div#recipe-ingredients {
          color: #615551;
          background-color: #f2efee;
          padding: 2rem;
        }

        h4 {
          display: block;
          text-transform: uppercase;
          text-align: center;
        }

        div#ingredients-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem 3rem;
          align-items: start;
        }

        div#ingredient-el {
          display: flex;
        }

        #ingredient-quantity {
          margin-right: 4px;
        }
        div#recipe-method {
          padding: 2rem;
          color: #615551;
          position: relative;
          height: 100%;
        }
        div#button {
          position: absolute;
          left: 50%;
          margin-top: 2rem;
          transform: translateX(-50%);
        }
      `}</style>
    </>
  );
};

export default Recipe;

export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts

  // Get the paths we want to pre-render based on posts
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  //const fetcher = (url) => fetch(url).then((r) => r.json());

  let res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${context.params.id}`
  );
  console.log(res);
  // console.log("res" + typeof res);
  const data = await res.json();
  console.log(data);
  //console.log(JSON.parse(data.data.recipe));
  const recipe = data.data.recipe;
  return {
    props: {
      recipe,
    },
  };
};
