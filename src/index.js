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
    titleBarMaximizable: true,
    subtitle: ""
  };

  minTitleBar = () => this.setState({ titleBarState: "small" });
  maxTitleBar = () => this.setState({ titleBarState: "big" });
  enableMaxTitleBar = () => this.setState({ titleBarMaximizable: true });
  disableMaxTitleBar = () => this.setState({ titleBarMaximizable: false });

  setSubTitle = subtitle => {
    this.setState({ subtitle });
  };

  render(props, { subtitle, titleBarState, titleBarMaximizable }) {
    return (
      <div class="app">
        <noscript>Please enable JavaScript to use this site.</noscript>
        <Head>
          <meta name="theme-color" content={Vars.statusColor} />
        </Head>
        <TitleBarLayout
          sizeState={titleBarState ? titleBarState : "small"}
          title="Jannis Jorre"
          subtitle={subtitle}
          maximizable={titleBarMaximizable}
        >
          <Router>
            <Redirect path="/" to="/home" default />
            <Home
              path="/home"
              minTitleBar={this.minTitleBar}
              maxTitleBar={this.maxTitleBar}
              setSubTitle={this.setSubTitle}
              enableMaxTitleBar={this.enableMaxTitleBar}
              disableMaxTitleBar={this.disableMaxTitleBar}
            />
            <CurriculumVitae
              path="/cv"
              minTitleBar={this.minTitleBar}
              maxTitleBar={this.maxTitleBar}
              setSubTitle={this.setSubTitle}
              enableMaxTitleBar={this.enableMaxTitleBar}
              disableMaxTitleBar={this.disableMaxTitleBar}
            />
            <Projects
              path="/projects"
              minTitleBar={this.minTitleBar}
              maxTitleBar={this.maxTitleBar}
              setSubTitle={this.setSubTitle}
              enableMaxTitleBar={this.enableMaxTitleBar}
              disableMaxTitleBar={this.disableMaxTitleBar}
            />
            <About
              path="/about"
              minTitleBar={this.minTitleBar}
              maxTitleBar={this.maxTitleBar}
              setSubTitle={this.setSubTitle}
              enableMaxTitleBar={this.enableMaxTitleBar}
              disableMaxTitleBar={this.disableMaxTitleBar}
            />
          </Router>
        </TitleBarLayout>
      </div>
    );
  }
}
