import "./style.scss";
import { Component } from "preact";
import Menu from "../Menu/Menu";
import { Link } from "preact-router/match";

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
        <img src="/assets/avatar.png" />
        <span>Jannis Jorre</span>
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
