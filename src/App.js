import './App.css';
import UnderscoreSpring from './modules/UnderscoreSpring';

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
          <p>I am passionate about building intuitive and eloquent websites and am looking for a junior dev position to finally kick start my career and learn among professionals.</p>
        </section>
        <section>
          <h2>Skills</h2>
          <ol>
            <li>Javascript ES6(+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default App;
