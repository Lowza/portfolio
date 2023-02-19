import reactLogo from '../img/structure.png';
import jsLogo from '../img/js.png';
import gitLogo from '../img/merge.png';
import nodeLogo from '../img/node-js.png';
import sqlLogo from '../img/sql-server.png';
import expressLogo from '../img/expressjs.png';

function Skills () {
    return (
    <section id="skills">
        <h2>Skills</h2>
        <ol>
            <li>Javascript ES6(+)<img src={jsLogo} alt="JavaScript icon" /></li>
            <li>React<img src={reactLogo} alt="React icon" /></li>
            <li>Node.js<img src={nodeLogo} alt="Node icon" /></li>
            <li>Express<img id="expressLogo" src={expressLogo} alt="Express icon" /></li>
            <li>SQL<img src={sqlLogo} alt="SQL icon" /></li>
            <li>Git<img src={gitLogo} alt="Git icon" /></li>
        </ol>
    </section>
    )
}

export default Skills;