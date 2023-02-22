import UnderscoreSpring from './modules/UnderscoreSpring';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jack Lomax</h1>
        <h1 id="lower-h1">Web Developer{UnderscoreSpring()}</h1>
      </header>
        <Nav />
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
