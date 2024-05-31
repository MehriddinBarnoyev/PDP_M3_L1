import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Home from "./Components/HomeSection";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header />
          <Home />
          <About/>
          <Education/>
          <Skills/>
          <Contact/>
        </div>
      </header>
    </div>
  );
}

export default App;
