import './App.css';
import UnderscoreSpring from './modules/UnderscoreSpring';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
        <section>
          <h2>About me</h2>
          <p>My name is Jack Lomax, I am a full stack web developer based in Axminster, Devon, UK. I started learning web development from home in 2023 through online courses and resources.</p>
          <p>I am passionate about building intuitive and eloquent websites and am looking for a junior dev position to kick start my career and learn among professionals.</p>
        </section>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
