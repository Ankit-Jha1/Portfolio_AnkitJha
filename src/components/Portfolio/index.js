import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
// import { Link } from 'react-router-dom'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }

  console.log(portfolio)

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>

        {/* <div>{renderPortfolio(portfolio)}</div> */}

        <div className="port_bigBox">
          {/* 1 project */}
          <div className="project">
            <span className="projectNames">Pokemon Website</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/pokemon_website/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/Pokemon_website"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="project">
            <span className="projectNames">Image Slider</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/image_slider/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/Image_Slider"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="project">
            <span className="projectNames">Toggle Pop Up</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/popup_toggle/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/PopUp_Toggle"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="project">
            <span className="projectNames">To Do App</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/todolist/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/ToDoList"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="project">
            <span className="projectNames">Form Validation</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/formvalidation/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/FormValidation"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="project">
            <span className="projectNames">Weight Converter</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/weightconverter/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/weightConverter"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/* cricket */}
          <div className="project">
            <span className="projectNames">Cricket API</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/cricketapi/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/CricketApi"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/* copy to clip */}
          <div className="project">
            <span className="projectNames">Copy to Clipboard</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/copyclipboard/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/copyClipboard"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/* weather api */}
          <div className="project">
            <span className="projectNames">Weather App</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/weatherapi/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/WeatherAPI"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/* theme changer */}
          <div className="project">
            <span className="projectNames">Theme Change</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/themechange/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/ThemeChange"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/* movie api */}
          <div className="project">
            <span className="projectNames">Movies API</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://fabulous-kitten-ec0621.netlify.app/moviesapi/"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/Ankit-Jha1/Projects_Page/tree/master/MoviesAPI"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
          {/* heroku deployed cricket app */}
          <div className="project">
            <span className="projectNames">Heroku Deployed App</span>
            <div className="buttons">
              <button>
                <a
                  target="_blank"
                  href="https://cricket-api-ankit.herokuapp.com/"
                >
                  Live
                </a>
              </button>
              <button disabled="true">
                <a target="_blank" href="#">
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
