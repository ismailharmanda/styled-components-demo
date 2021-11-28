import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StyledButton type="submit">Styled Button</StyledButton>
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
      <br />
      <div>
        <SubmitButton>Submit Button</SubmitButton>
      </div>
    </div>
  );
}

export default App;
