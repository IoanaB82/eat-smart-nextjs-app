import Link from "next/link";

const RecipeList = (props) => {
  return (
    <>
      <Link href="/recipes/[id]" as={`recipes/${props.recipe.id}`}>
        <a data-testid="link-url">
          <div id="recipe-item">
            <figure>
              <img
                src={props.recipe.image_url}
                onError={(i) => (i.target.src = "noimg.png")}
                data-testid="recipe-img"
              />
            </figure>
            <div>
              <h4 data-testid="recipe-title">
                {props.recipe.title.replace("amp;", "")}
              </h4>
              <p id="publisher" data-testid="recipe-publisher">
                by {props.recipe.publisher}
              </p>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          div#recipe-item {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          figure {
            width: 10rem;
            height: 10rem;
            position: relative;
            top: 0;
            display: block;
            margin: 0.5rem 0.5rem 0.5rem 0;

            border-radius: 50%;
          }

          figure:before {
            display: block;
            height: 100%;
            width: 100%;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(
              to right bottom,
              #fbdb89,
              #f48982
            );
            opacity: 0.2;
            border-radius: 50%;
          }

          figure img {
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            overflow: hidden;
          }

          h4 {
            color: #615551;
            font-size: 0.9rem;
            display: block;
            margin-bottom: 0;
          }
          p#publisher {
            margin-top: 0;
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default RecipeList;
