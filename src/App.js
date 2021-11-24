import StyledButton, { FancyButton } from "./components/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <div>
        <StyledButton variant="outline">Styled Button</StyledButton>
      </div>
      <br />
      <div>
        <FancyButton as="a">FancyButton</FancyButton>
      </div>
    </div>
  );
}

export default App;
