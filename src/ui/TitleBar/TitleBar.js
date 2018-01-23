import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

// test

export default class TitleBar extends Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render(props, { isMenuOpen }) {
    return (
      <div class="titleBar">
        <div onClick={this.toggleMenu} class="menuButton">
          <div class="menuButtonPart" />
          <div class="menuButtonPart" />
          <div class="menuButtonPart" />
        </div>
        {isMenuOpen ? (
          <div onClick={this.toggleMenu} class="background-tap-listen-helper" />
        ) : null}
        <nav onMouseDown={this.toggleMenu} class={isMenuOpen ? "open" : ""}>
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
        </nav>
      </div>
    );
  }
}
