import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import reactLogo from "../assets/img/react-svgrepo-com.svg";
import vueLogo from "../assets/img/vue-16-svgrepo-com.svg";
import nextjsLogo from "../assets/img/nextjs-svgrepo-com.svg";
import nodejsLogo from "../assets/img/nodejs01-svgrepo-com.svg";
import djangoLogo from "../assets/img/django-svgrepo-com.svg";
import iosLogo from "../assets/img/os-ios-dark-svgrepo-com.svg";
import androidLogo from "../assets/img/android-svgrepo-com.svg";
import mlLogo from "../assets/img/machine-learning-model-svgrepo-com.svg";
import aiLogo from "../assets/img/ai-ai-svgrepo-com.svg";
import dataLogo from "../assets/img/data-svgrepo-com.svg";

export const Technology = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technology Used</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={reactLogo} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={vueLogo} alt="Vue.js" />
                  <h5>Vue.js</h5>
                </div>
                <div className="item">
                  <img src={nextjsLogo} alt="Next.js" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={nodejsLogo} alt="Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={djangoLogo} alt="Django" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={iosLogo} alt="iOS" />
                  <h5>iOS</h5>
                </div>
                <div className="item">
                  <img src={androidLogo} alt="Android" />
                  <h5>Android</h5>
                </div>
                <div className="item">
                  <img src={mlLogo} alt="Machine Learning" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={aiLogo} alt="Artificial Intelligence" />
                  <h5>Artificial Intelligence</h5>
                </div>
                <div className="item">
                  <img src={dataLogo} alt="Data" />
                  <h5>Data</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
