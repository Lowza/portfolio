import UnderscoreSpring from './modules/UnderscoreSpring';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import {Link} from 'react-scroll';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Jack Lomax</h1>
        <h1 id="lower-h1">Web Developer{UnderscoreSpring()}</h1>
        <ol>
          <li><Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
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
