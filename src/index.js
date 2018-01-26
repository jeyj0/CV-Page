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
        <Head>
          <meta
            name="description"
            content="Jannis Jorre | Software Developer | Java, HTML, CSS, JS"
          />

          <meta name="theme-color" content={Vars.statusColor} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/assets/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/assets/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/assets/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/assets/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/icons/favicon-16x16.png"
          />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        </Head>
        <noscript>Please enable JavaScript to use this site.</noscript>
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
