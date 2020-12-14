import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div>
      <h1 data-testid="home-h1">Welcome!</h1>
      <p>Your new favorite food website!</p>
      <p>Get inspiration for your home meals and suprise family and friends.</p>

      {/* <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={() => {
          window.localStorage.clear();
        }}
      >
        Delete all saved data?
      </Button> */}
    </div>
  );
}
