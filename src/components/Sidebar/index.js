import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <div className="nameSidebar">
          <h1>Ankit</h1>
          <h1>Jha</h1>
        </div>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#fff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fff" />
        </NavLink>
      </nav>

      {/* social media handles */}
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ankit-jha-9a89b01ba/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Ankit-Jha1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" size="2x" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
