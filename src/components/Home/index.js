import React, { useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoM from '../../assets/images/just-logo.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'a',
    't',
    't',
    ' ',
    'B',
    'o',
    'r',
    's',
    'c',
    'h',
    'n',
    'a',
    'c',
    'k',
  ]
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="desktop">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoM} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>

          <h1 className="mobile">
            <img src={LogoM} className="mobile-logo" alt="M" />
            <AnimatedLetters
              strArray={nameArray}
              letterClass={letterClass}
              idx={15}
            />
          </h1>

          <h2 className="desktop">
            Full-Stack / Adaptive & Responsive Design / Data Structures
          </h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>

        {/* <Logo />  */}

        <div class="card1">
          <img src={LogoM} className="card-img-top" alt="project image" />
          <div className="card-body">
            <h5 className="card-title">Periodic Tables</h5>
            <p className="card-text">
              Some placeholder for now. Some placeholder for now. Some
              placeholder for now. Some placeholder for now.
            </p>
            <div className="buttons">
              <button className="btn-git">
                <FontAwesomeIcon icon={faGithub} />
              </button>
              <button className="btn-app">
                <FontAwesomeIcon icon={faChrome} />
              </button>
            </div>
          </div>
        </div>
        <div class="card2">
          <img src={LogoM} className="card-img-top" alt="project image" />
          <div className="card-body">
            <h5 className="card-title">Periodic Tables</h5>
            <p className="card-text">
              Some placeholder for now. Some placeholder for now. Some
              placeholder for now. Some placeholder for now.
            </p>
            <div className="buttons">
              <button className="btn-git">
                <FontAwesomeIcon icon={faGithub} />
              </button>
              <button className="btn-app">
                <FontAwesomeIcon icon={faChrome} />
              </button>
            </div>
          </div>
        </div>
        <div class="card3">
          <img src={LogoM} className="card-img-top" alt="project image" />
          <div className="card-body">
            <h5 className="card-title">Periodic Tables</h5>
            <p className="card-text">
              Some placeholder for now. Some placeholder for now. Some
              placeholder for now. Some placeholder for now.
            </p>
            <div className="buttons">
              <button className="btn-git">
                <FontAwesomeIcon icon={faGithub} />
              </button>
              <button className="btn-app">
                <FontAwesomeIcon icon={faChrome} />
              </button>
            </div>
          </div>
        </div>
        <div class="card4">
          <img src={LogoM} className="card-img-top" alt="project image" />
          <div className="card-body">
            <h5 className="card-title">Periodic Tables</h5>
            <p className="card-text">
              Some placeholder for now. Some placeholder for now. Some
              placeholder for now. Some placeholder for now.
            </p>
            <div className="buttons">
              <button className="btn-git">
                <FontAwesomeIcon icon={faGithub} />
              </button>
              <button className="btn-app">
                <FontAwesomeIcon icon={faChrome} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Home
