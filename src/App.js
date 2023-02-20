import './App.css';
import UnderscoreSpring from './modules/UnderscoreSpring';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Jack Lomax</h1><h1 id="lower-h1">Web Developer{UnderscoreSpring()}</h1>
        <ol>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ol>
      </nav>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
