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
        <h1>Jack Lomax, Web Developer {UnderscoreSpring()}</h1>
        <ul>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
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
