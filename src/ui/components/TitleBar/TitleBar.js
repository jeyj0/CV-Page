import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

import Menu from "../Menu/Menu";

export default class TitleBar extends Component {
  toggable = true;
  scrollLock = false;
  touchCoords = {
    start: {
      x: null,
      y: null
    },
    end: {
      x: null,
      y: null
    }
  };
  state = {
    isSmall: this.props.sizeState == "small" || !this.props.sizeState,
    isUp: this.props.subtitle ? true : false,
    maximizable: this.props.maximizable
  };

  minimize = () => this.setState({ isSmall: true });
  maximize = () => this.setState({ isSmall: false });
  blockToggle = () => (this.toggable = false);

  toggleIfAllowed = () => {
    if (!this.toggable) {
      this.toggable = true;
      return;
    }
    if (this.state.isSmall && this.state.maximizable) this.maximize();
    else this.minimize();
    return false;
  };

  touchStart = e => {
    e.preventDefault();
    this.touchCoords.start.x = e.changedTouches[0].pageX;
    this.touchCoords.start.y = e.changedTouches[0].pageY;
  };
  touchEnd = e => {
    e.preventDefault();
    this.touchCoords.end.x = e.changedTouches[0].pageX;
    this.touchCoords.end.y = e.changedTouches[0].pageY;

    const dx = Math.abs(this.touchCoords.end.x - this.touchCoords.start.x);
    const dy = Math.abs(this.touchCoords.end.y - this.touchCoords.start.y);
    if (dy > 20) {
      if (dy > dx) {
        this.toggleIfAllowed();
      }
    } else {
      e.target.click();
    }
  };

  componentWillReceiveProps = (nextProps, nextState) => {
    let newState = {};

    if (this.props.sizeState !== nextProps.sizeState)
      newState.isSmall =
        nextProps.sizeState == "small" || !this.props.sizeState;
    if (this.props.subtitle !== nextProps.subtitle)
      newState.isUp = nextProps.subtitle != null;
    if (this.props.maximizable !== nextProps.maximizable)
      newState.maximizable = nextProps.maximizable;

    this.setState(newState);

    if (!nextProps.maximizable) this.minimize();
  };

  componentDidMount = () => {
    document
      .getElementById("titleBar")
      .addEventListener("touchstart", this.touchStart, { passive: false });
    document
      .getElementById("titleBar")
      .addEventListener("touchend", this.touchEnd, { passive: false });
  };

  componentWillUnmount = () => {
    document
      .getElementById("titleBar")
      .removeEventListener("touchstart", this.touchStart);
    document
      .getElementById("titleBar")
      .removeEventListener("touchend", this.touchEnd);
  };

  render({ title, subtitle, maximizable, showShadow }, { isSmall, isUp }) {
    return (
      <div
        id="titleBar"
        class={
          "titleBar" +
          (isSmall || !maximizable ? " small" : "") +
          (showShadow ? " shadow" : "")
        }
        onClick={this.toggleIfAllowed}
      >
        <div class="title">
          <img
            class={isSmall || !maximizable ? "small" : ""}
            src="/assets/avatar.webp"
            alt="Jannis Jorre"
          />
          <div
            class={
              (isSmall || !maximizable ? "small" : "") + (isUp ? " up" : "")
            }
          >
            <h1
              class={
                (isSmall || !maximizable ? "small" : "") + (isUp ? " up" : "")
              }
            >
              {title ? title : ""}
            </h1>
          </div>
          <div class={(isSmall || !maximizable) && isUp ? "small" : ""}>
            <h2 class={(isSmall || !maximizable) && isUp ? "small" : ""}>
              {subtitle}
            </h2>
          </div>
        </div>
        <Menu class="alignRight" onClick={this.blockToggle}>
          <Link activeClassName="active" href="/home">
            Home
          </Link>
          <Link activeClassName="active" href="/cv">
            Curriculum Vitae
          </Link>
          <Link activeClassName="active" href="/projects">
            Projects
          </Link>
          <Link activeClassName="active" href="/about">
            About
          </Link>
        </Menu>
        <div
          class={"arrowContainer" + (isSmall || !maximizable ? " small" : "")}
        >
          <div class="arrow" />
        </div>
      </div>
    );
  }
}
