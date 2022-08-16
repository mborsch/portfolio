import './index.scss'
import LogoM from '../../assets/images/just-logo.png'
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
      <img src={LogoM} alt="logo" className="desktop" />
    </Link>
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#004aad" />
      </NavLink>

      <NavLink
        exact="true"
        activeClassName="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#004aad" />
      </NavLink>

      <NavLink
        exact="true"
        activeClassName="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#004aad" />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
