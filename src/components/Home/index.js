import React, { useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoM from '../../assets/images/just-logo.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA } from '@fortawesome/free-solid-svg-icons'
import tableThumb from '../../assets/images/tables-thumb.png'
import FitThumb from '../../assets/images/fitnessApp.png'
import movieThumb from '../../assets/images/movies-thumbnail.png'

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
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
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
          <div className="img-wrap">
            <img
              src={tableThumb}
              className="card-img-top"
              alt="project image"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Periodic Tables</h5>
            <p className="card-text">
              Full Stack Restaurant Reservation UI with CRUD functionality,
              RESTful API, Postgres database. Built with React, Express, Knex
            </p>
            <div className="buttons">
              <a href="https://github.com/mborsch/restaurant-reservation">
                <button className="btn-git">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </a>
              <a href="res-reserve-front-end.herokuapp.com/">
                <button className="btn-app">
                  <FontAwesomeIcon icon={faChrome} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card2">
          <div className="img-wrap">
            <img src={FitThumb} className="card-img-top" alt="project image" />
          </div>
          <div className="card-body">
            <h5 className="card-title">ICO Fit</h5>
            <p className="card-text">
              React application using Rapid API and Material UI.
            </p>
            <div className="buttons">
              <a href="https://github.com/mborsch/fitness-app">
                <button className="btn-git">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </a>
              <a href="https://icofitness.netlify.app/">
                <button className="btn-app">
                  <FontAwesomeIcon icon={faChrome} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card3">
          <div className="img-wrap">
            <img
              src={movieThumb}
              className="card-img-top"
              alt="project image"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">WeLoveMovies</h5>
            <p className="card-text">
              Set up database, completed migrations using Knex tools, built
              RESTful API and complex routes to handle tables.
            </p>
            <div className="buttons">
              <a href="https://github.com/mborsch/we-love-movies">
                <button className="btn-git">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </a>
              <a href="https://movie-front-end-mborsch.vercel.app/">
                <button className="btn-app">
                  <FontAwesomeIcon icon={faChrome} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card4">
          <div className="img-wrap">
            <img src={LogoM} className="card-img-top" alt="project image" />
          </div>
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
