import React, { Component } from 'react'
import sliderimg from "./img/sliderimg.jpeg"
import "./App.css"

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header__left">
            <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="" />
          </div>
          <div className="header__right">
            <div className="header__right__link">Internships</div>
            <div className="header__right__link">Online Trainings <span className="orange">OFFER</span></div>
            <div className="header__right__link">Fresher Jobs</div>
            <button className="header__login__button1">Login</button>
            <button className="header__login__button2">Register</button>
          </div>
        </header>
        <div className="search__box flex__center">
          <input type="text" placeholder="What are you looking for ?" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="carousel">
          
        </div>
      </div>
    )
  }
}

export default App
