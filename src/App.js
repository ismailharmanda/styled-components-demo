import { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import "./App.css";
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";

const theme = {
  dark: {
    primary: "#000",
    text: "#FFF",
  },
  light: {
    primary: "#FFF",
    text: "#000",
  },
  fontFamily: "Sagoe UI",
};
const GlobalStyle = createGlobalStyle`
button{
  font-family:${(props) => props.theme.fontFamily}
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
        <br />
        <div>
          <DarkButton>Dark Button</DarkButton>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
