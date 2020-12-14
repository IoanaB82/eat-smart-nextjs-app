import { render, cleanup } from "@testing-library/react";
import Home from "../pages/index";
import Recipes from "../pages/recipes/index";

import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

function renderHome(args) {
  let defaultProps = {
    location: "",
    errors: {},
  };

  const props = { ...defaultProps, ...args };

  return render(<Home {...props} />);
}

// describe("index page", () => {
//   test("renders title correct", () => {
//     const { getByText } = render(<Home />);
//     getByText("Welcome");
//   });
// });

it("renders an h1 with content Welcome", () => {
  const { getByTestId } = renderHome();

  expect(getByTestId("home-h1")).toHaveTextContent("Welcome!");
});

// function renderRecipes(args) {
//   let defaultProps = {
//     location: "",
//     errors: {},
//   };

//   const props = { ...defaultProps, ...args };

//   return render(<Recipes {...props} />);
// }

// describe("index page", () => {
//   test("renders title correct", () => {
//     const { getByText } = render(<Home />);
//     getByText("Welcome");
//   });
// });

it("renders", () => {
  const props = {
    recipes: [
      {
        publisher: "Epicurious",
        image_url: "http://forkify-api.herokuapp.com/images/511172602489.jpg",
        title: "Chicken in Garlic-Almond Sauce",
        id: "5ed6604591c37cdc054bc859",
      },

      {
        publisher: "Jamie Oliver",
        image_url:
          "http://forkify-api.herokuapp.com/images/577_1_1350912080_lrg9b99.jpg",
        title: "Super tasty Spanish roast chicken",
        id: "5ed6604591c37cdc054bc868",
      },
    ],
  };
  const { asFragment } = render(<Recipes recipesInit={props.recipes} />);

  expect(asFragment()).toBeTruthy();
});
