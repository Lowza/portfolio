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
            <li>Javascript ES6(+)</li><img src={jsLogo} alt="JavaScript icon" />
            <li>React</li><img src={reactLogo} alt="React icon" />
            <li>Node.js</li><img src={nodeLogo} alt="Node icon" />
            <li>Express</li><img id="expressLogo" src={expressLogo} alt="Express icon" />
            <li>SQL</li><img src={sqlLogo} alt="SQL icon" />
            <li>Git</li><img src={gitLogo} alt="Git icon" />
        </ol>
    </section>
    )
}

export default Skills;