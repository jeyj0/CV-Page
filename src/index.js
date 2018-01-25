import "./style.scss";
import "../node_modules/normalize.css/normalize.css";

import { Component } from "preact";
import Router from "preact-router";
import Head from "preact-head";

import Vars from "./lib/Vars";
import Redirect from "./ui/components/Redirect/Redirect";
import TitleBarLayout from "./ui/components/TitleBarLayout/TitleBarLayout";

import Home from "./ui/pages/Home/Home";
import CurriculumVitae from "./ui/pages/CurriculumVitae/CurriculumVitae";
import Projects from "./ui/pages/Projects/Projects";
import About from "./ui/pages/About/About";

export default class App extends Component {
  state = {
    titleBarState: "big",
    subtitle: ""
  };

  minTitleBar = () => this.setState({ titleBarState: "small" });
  maxTitleBar = () => this.setState({ titleBarState: "big" });

  setSubTitle = subtitle => {
    this.setState({ subtitle });
  };

  render(props, { subtitle, titleBarState }) {
    return (
      <div class="app">
        <Head>
          <meta name="theme-color" content={Vars.statusColor} />
        </Head>
        <TitleBarLayout
          sizeState={titleBarState ? titleBarState : "small"}
          title="Jannis Jorre"
          subtitle={subtitle}
        >
          <Router>
            <Redirect path="/" to="/home" default />
            <Home
              path="/home"
              minTitleBar={this.minTitleBar}
              maxTitleBar={this.maxTitleBar}
              setSubTitle={this.setSubTitle}
            />
            <CurriculumVitae
              path="/cv"
              minTitleBar={this.minTitleBar}
              maxTitleBar={this.maxTitleBar}
              setSubTitle={this.setSubTitle}
            />
            <Projects
              path="/projects"
              minTitleBar={this.minTitleBar}
              maxTitleBar={this.maxTitleBar}
              setSubTitle={this.setSubTitle}
            />
            <About
              path="/about"
              minTitleBar={this.minTitleBar}
              maxTitleBar={this.maxTitleBar}
              setSubTitle={this.setSubTitle}
            />
          </Router>
        </TitleBarLayout>
      </div>
    );
  }
}
