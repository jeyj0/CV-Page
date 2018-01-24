import "./style.scss";
import "../node_modules/normalize.css/normalize.css";

import { Component } from "preact";
import Router from "preact-router";
import Head from "preact-head";

import Vars from "./lib/Vars";
import TitleBar from "./ui/components/TitleBar/TitleBar";
import Redirect from "./ui/components/Redirect/Redirect";
import Home from "./ui/pages/Home/Home";
import CurriculumVitae from "./ui/pages/CurriculumVitae/CurriculumVitae";
import Projects from "./ui/pages/Projects/Projects";
import About from "./ui/pages/About/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="theme-color" content={Vars.statusColor} />
        </Head>
        <TitleBar />
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
