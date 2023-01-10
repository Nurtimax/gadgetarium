import Button from "./components/UI/button/Button";

const App = () => {
  return (
    <div>
      <Button bgcolor="red" variant="contained">
        click
      </Button>
      <Button bgcolor="green" variant="outlined">
        click
      </Button>
      <Button variant="text">mmm</Button>
    </div>
  );
};

export default App;
