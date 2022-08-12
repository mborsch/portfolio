import './index.scss'
import LogoM from '../../assets/images/M-fill.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faLinkedin,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoM} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#FFE5B4" />
      </NavLink>

      <NavLink
        exact="true"
        activeClassName="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#FFE5B4" />
      </NavLink>

      <NavLink
        exact="true"
        activeClassName="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#FFE5B4" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a rel="noreferrer" href="https://www.linkedin.com/in/matt-borschnack/">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
