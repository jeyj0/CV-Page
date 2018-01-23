import "./style.scss";
import "../node_modules/normalize.css/normalize.css";

import { Component } from "preact";
import Router from "preact-router";

import Header from "./ui/Header/Header";
import Redirect from "./ui/Redirect/Redirect";
import Home from "./ui/Home/Home";
import CurriculumVitae from "./ui/CurriculumVitae/CurriculumVitae";
import Projects from "./ui/Projects/Projects";
import About from "./ui/About/About";

const postcss = require("postcss");

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Redirect path="/" to="/home" default />
          <Home path="/home" />
          <CurriculumVitae path="/cv" />
          <Projects path="/projects" />
          <About path="/about" />
        </Router>
      </div>
    );
  }
}
