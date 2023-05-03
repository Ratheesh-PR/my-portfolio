import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <SocialLink />
    </div>
  );
}

export default App;
