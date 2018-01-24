import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

import Menu from "../Menu/Menu";

export default class TitleBar extends Component {
  state = {
    isSmall: true
  };

  toggleSmall = () => {
    this.setState({ isSmall: !this.state.isSmall });
  };

  render(props, { isSmall }) {
    return (
      <div class="titleBar">
        <div class="title" onClick={this.toggleSmall}>
          <img
            class={isSmall ? "small" : ""}
            src="/assets/avatar.png"
            alt="Jannis Jorre"
          />
          <div class={isSmall ? "small up" : ""}>
            <h1 class={isSmall ? "small up" : ""}>Jannis Jorre</h1>
          </div>
          <div class={isSmall ? "small" : ""}>
            <h2 class={isSmall ? "small" : ""}>Home</h2>
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
