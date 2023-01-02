import React from "react";
// import Navbar from './Navbar'
import NavbarAll from "./NavbarAll";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <>
      <NavbarAll />

      <div className="project-section">
        <div className="projects-header">
          <h1>
            Projects <hr id="line" />
          </h1>
          <br />
        </div>
        <div className="project-card-container">
          <ProjectCard
            title="Def-Call"
            projectdesc="Def-call is a video calling website for mute people developed using Python, ReactJS, NodeJS and socket.io. Right now, it can only detect 7 sign language."
            glink="https://github.com/codemaniac-sahil/Def-call"
            llink="https://def-call.netlify.app/"
          />

          <ProjectCard
            title="RapidDicto"
            projectdesc="RapidDicto is a dictionary website developed using HTML, CSS and JavaScript. This website will show the meaning of the word with pronunciation and examples."
            glink="https://github.com/codemaniac-sahil/dictionary-web-app"
            llink="https://rapid-dicto.netlify.app/"
          />

          <ProjectCard
            title="MovieLand"
            projectdesc="MovieLand is a movie searching website for cinephiles developed using HTML, CSS and ReactJS. Used OMDB API for getting movie data."
            glink="https://github.com/codemaniac-sahil/movieapp-react"
            llink="https://deft-flan-cf6153.netlify.app/"
          />

          <ProjectCard
            title="Currency Converter"
            projectdesc=" It is a simple Currency Converter website developed using HTML, CSS and ReactJS. I used exchangerate.host API for getting the current values of currency. "
            glink="https://github.com/codemaniac-sahil/currency_converter_react"
            llink="https://currency-converter-web-app.netlify.app/"
          />

          <ProjectCard
            title="WeatherU"
            projectdesc=" WeatherU is a weather forecasting website developed using HTML, CSS and JavaScript. Openweather API is used to get the data of a particular city. "
            glink="https://github.com/codemaniac-sahil/weather-app-api"
            llink="https://weather-web-app-js.netlify.app/"
          />

          <ProjectCard
            title="INEWS"
            projectdesc=" INEWS is a NEWS dispalying website developed using HTML, CSS and JavaScript.Thi website shows the top news headline of the country in which the user is browsing the site. "
            glink="https://github.com/codemaniac-sahil/news-webapp-api"
            llink="https://news-web-app-js.netlify.app/"
          />

          <ProjectCard
            title="Stalking the Stock"
            projectdesc="Stalking the stock is a machine learning model used to predict the price of stock developed using python. I used LSTM algorithm to train the model. "
            glink="https://github.com/codemaniac-sahil/stock-price-predicting-webapp"
            llink=""
          />

          <ProjectCard
            title="IBlogger"
            projectdesc="IBlogger is a blogging website for blog writers developed using HTML, CSS, JavaScript, PHP and MySQL.In this website user can create, delete, update and view the blog."
            glink="https://github.com/codemaniac-sahil/blogging-webapp"
            llink=""
          />
        </div>
      </div>
    </>
  );
}

export default Project;
