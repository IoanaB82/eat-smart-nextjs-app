import { render, cleanup } from "@testing-library/react";
import SearchResults from "./SearchResults";

import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

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
    start: 0,
    end: 2,
  };
  const { asFragment } = render(<SearchResults {...props} />);

  expect(asFragment()).toBeTruthy();
});

it("renders the title of the recipe", () => {
  const props = {
    recipes: [
      {
        publisher: "Epicurious",
        image_url: "http://forkify-api.herokuapp.com/images/511172602489.jpg",
        title: "Chicken in Garlic-Almond Sauce",
        id: "5ed6604591c37cdc054bc859",
      },
    ],
    start: 0,
    end: 1,
  };

  const { getByTestId } = render(<SearchResults {...props} />);

  expect(getByTestId("recipe-title")).toHaveTextContent(
    "Chicken in Garlic-Almond Sauce"
  );
});

it("renders the title of the recipe", () => {
  const props = {
    recipes: [
      {
        publisher: "Epicurious",
        image_url: "http://forkify-api.herokuapp.com/images/511172602489.jpg",
        title: "Chicken in Garlic-Almond Sauce",
        id: "5ed6604591c37cdc054bc859",
      },
    ],
    start: 0,
    end: 1,
  };

  const { getByTestId } = render(<SearchResults {...props} />);

  expect(getByTestId("recipe-title")).toHaveTextContent(
    "Chicken in Garlic-Almond Sauce"
  );
});

it("renders the publisher of the recipe", () => {
  const props = {
    recipes: [
      {
        publisher: "Epicurious",
        image_url: "http://forkify-api.herokuapp.com/images/511172602489.jpg",
        title: "Chicken in Garlic-Almond Sauce",
        id: "5ed6604591c37cdc054bc859",
      },
    ],
    start: 0,
    end: 1,
  };

  const { getByTestId } = render(<SearchResults {...props} />);

  expect(getByTestId("recipe-publisher")).toHaveTextContent("Epicurious");
});

it("renders the image of the recipe", () => {
  const props = {
    recipes: [
      {
        publisher: "Epicurious",
        image_url: "http://forkify-api.herokuapp.com/images/511172602489.jpg",
        title: "Chicken in Garlic-Almond Sauce",
        id: "5ed6604591c37cdc054bc859",
      },
    ],
    start: 0,
    end: 1,
  };

  const { getByTestId } = render(<SearchResults {...props} />);

  expect(getByTestId("recipe-img")).toContainHTML(
    "http://forkify-api.herokuapp.com/images/511172602489.jpg"
  );
});

it("passes to link the right id", () => {
  const props = {
    recipes: [
      {
        publisher: "Epicurious",
        image_url: "http://forkify-api.herokuapp.com/images/511172602489.jpg",
        title: "Chicken in Garlic-Almond Sauce",
        id: "5ed6604591c37cdc054bc859",
      },
    ],
    start: 0,
    end: 1,
  };

  const { getByTestId } = render(<SearchResults {...props} />);

  expect(getByTestId("link-url")).toContainHTML("5ed6604591c37cdc054bc859");
});
