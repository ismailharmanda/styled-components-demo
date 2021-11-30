import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import "./App.css";
import { AnimatedLogo } from "./components/Button/Button.styles";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <AnimatedLogo src={logo} />
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
