import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

import Menu from "../Menu/Menu";

export default class TitleBar extends Component {
  state = {
    isSmall: this.props.sizeState == "small" || !this.props.sizeState,
    isUp: this.props.subtitle ? true : false
  };

  toggleSmall = () => this.setState({ isSmall: !this.state.isSmall });

  componentWillReceiveProps = (nextProps, nextState) =>
    this.setState({
      isSmall: nextProps.sizeState == "small" || !this.props.sizeState,
      isUp: nextProps.subtitle != null
    });

  render({ title, subtitle }, { isSmall, isUp }) {
    return (
      <div class="titleBar">
        <div class="title" onClick={this.toggleSmall}>
          <img
            class={isSmall ? "small" : ""}
            src="/assets/avatar.png"
            alt="Jannis Jorre"
          />
          <div class={(isSmall ? "small" : "") + (isUp ? " up" : "")}>
            <h1 class={(isSmall ? "small" : "") + (isUp ? " up" : "")}>
              {title ? title : ""}
            </h1>
          </div>
          <div class={isSmall && isUp ? "small" : ""}>
            <h2 class={isSmall && isUp ? "small" : ""}>{subtitle}</h2>
          </div>
        </div>
        <Menu class="alignRight">
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
      </div>
    );
  }
}
