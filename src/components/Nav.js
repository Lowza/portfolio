import {Link} from 'react-scroll';

function Nav () {
    return (
        <nav>
        <ol>
          <li><Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
        </ol>
      </nav>
    )
}

export default Nav;