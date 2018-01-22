import "./style";
import "./node_modules/normalize.css/normalize.css";

import { Component } from "preact";
import Router from "preact-router";

import Header from "./src/ui/Header/Header";
import Redirect from "./src/ui/Redirect/Redirect";
import CurriculumVitae from "./src/ui/CurriculumVitae/CurriculumVitae";
import Projects from "./src/ui/Projects/Projects";
import About from "./src/ui/About/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Redirect path="/" to="/projects" default />
          <CurriculumVitae path="/cv" />
          <Projects path="/projects" />
          <About path="/about" />
        </Router>
      </div>
    );
  }
}
