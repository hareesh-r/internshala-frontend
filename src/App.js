import React, { Component } from 'react'
import sliderimg from "./img/sliderimg.jpeg"
import "./App.css"
import Row from "./component/Row"
import FooterRows from './component/FooterRows'

export class App extends Component {

  render() {
    var options = [
      {
        img: "https://internshala.com/static/images/home/internships/categories/work_from_home.svg",
        text: "Work from home",
      }, {
        img: "https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg",
        text: "Delhi/NCR",
      }, {
        img: "https://internshala.com/static/images/home/internships/categories/bangalore.svg",
        text: "Bangalore",
      }, {
        img: "https://internshala.com/static/images/home/internships/categories/mumbai.svg",
        text: "Mumbai",
      }, {
        img: "https://internshala.com/static/images/home/internships/categories/hyderabad.svg",
        text: "Hyderabad",
      }, {
        img: "https://internshala.com/static/images/home/internships/categories/chennai.svg",
        text: "Chennai",
      }, {
        img: "https://internshala.com/static/images/home/internships/categories/kolkata.svg",
        text: "Kolkata",
      }, {
        img: "https://internshala.com/static/images/home/internships/categories/international.svg",
        text: "International",
      },
    ]
    var object2 = [{
      img: "https://internshala.com/static/images/home/internships/categories/part_time.svg",
      text: "Part-time",
    }, {
      img: "https://internshala.com/static/images/home/internships/categories/engineering.svg",
      text: "Engineering",
    }, {
      img: "https://internshala.com/static/images/home/internships/categories/ngo.svg",
      text: "NGO",
    }, {
      img: "https://internshala.com/static/images/home/internships/categories/mba.svg",
      text: "MBA",
    }, {
      img: "https://internshala.com/static/images/home/internships/categories/design.svg",
      text: "Design",
    }, {
      img: "https://internshala.com/static/images/home/internships/categories/science.svg",
      text: "Science",
    }, {
      img: "https://internshala.com/static/images/home/internships/categories/media.svg",
      text: "Media",
    }, {
      img: "https://internshala.com/static/images/home/internships/categories/humanities.svg",
      text: "Humanities",
    }]
    var object3 = [
      {
        img: "https://internshala.com/static/images/home/trainings/icons/programming_with_python.svg",
        text: "Programming with python",
      }, {
        img: "https://internshala.com/static/images/home/trainings/icons/digital_marketing.svg",
        text: "Digital Marketing",
      }, {
        img: "https://internshala.com/static/images/home/trainings/icons/web_development.svg",
        text: "Web Development",
      }, {
        img: "https://internshala.com/static/images/home/trainings/icons/machine_learning.svg",
        text: "Machine Learning",
      }, {
        img: "https://internshala.com/static/images/home/trainings/icons/advanced_excel.svg",
        text: "Adanced Excel",
      }, {
        img: "https://internshala.com/static/images/home/trainings/icons/ethical_hacking.svg",
        text: "Ethical Hacking",
      }, {
        img: "https://internshala.com/static/images/home/trainings/icons/autocad.svg",
        text: "AutoCAD",
      }, {
        img: "https://internshala.com/static/images/home/trainings/icons/creative_writing.svg",
        text: "Creative Writing",
      }
    ]
    var object4 = [
      {
        img: "https://internshala.com/static/images/home/jobs/perks/ctc.svg",
        text: "Minimum CTC of 3 LPA"
      }, {
        img: "https://internshala.com/static/images/home/jobs/perks/dream.svg",
        text: "Dream Companies"
      }, {
        img: "https://internshala.com/static/images/home/jobs/perks/verified.svg",
        text: "Verified"
      },
    ]
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
            <i className="fas fa-search fa-lg"></i>
          </button>
        </div>
        <div className="carousel flex__center">
          <img src={sliderimg} alt="" />
          <img src={sliderimg} alt="" />
          <img src={sliderimg} alt="" />
          <img src={sliderimg} alt="" />
          <img src={sliderimg} alt="" />
        </div>
        <div className="info flex__center">
          <div className="info__left">
            <h3>Internships</h3>
            <h5>Apply to 10,000+ internships for free</h5>
          </div>
          <h4>View All Internships ➡</h4>
        </div>
        <Row Title={"Popular Cities"} given={options} />
        <Row Title={"Popular Categories"} given={object2} />

        <div className="info flex__center">
          <div className="info__left">
            <h3>Internshala Trainings</h3>
            <h5>Learn new-age skills on the go</h5>
          </div>
          <h4>View All Internships ➡</h4>
        </div>
        <Row Title={""} given={object3} />
        <div className="info flex__center">
          <div className="info__left">
            <h3>Fresher Jobs <span className="orange">NEW</span></h3>
            <h5>Premium fresher jobs on your fingertips </h5>
          </div>
          <h4>View All Internships ➡</h4>
        </div>
        <Row Title={""} given={object4} />
        <footer>
          <FooterRows />
          <hr />
          <div className="bottom__footer">
            <div className="bottom__footer__left">
              <button>
                <i class="fab fa-google-play fa-lg"></i> Get Android App
              </button>
              <i class="fab fa-instagram fa-lg"></i>
              <i class="fab fa-twitter fa-lg"></i>
              <i class="fab fa-youtube fa-lg"></i>
              <i class="fab fa-linkedin-in fa-lg"></i>

            </div>
            <div className="bottom__footer__right">
              © Copyright 2021 Internshala
            </div>
          </div>
        </footer>
      </div>

    )
  }
}

export default App
