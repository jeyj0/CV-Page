import "./style.scss";
import { Component } from "preact";

export default class Menu extends Component {
  state = {
    isMenuOpen: false
  };

  clicked = () => {
    this.toggleMenu();
    this.props.onClick();
  };

  toggleMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen });

  render(props, { isMenuOpen }) {
    return (
      <div class={"menu" + (props.class ? " " + props.class : "")}>
        <div onClick={this.clicked} class="menuButton">
          <div class="menuButtonPart" />
          <div class="menuButtonPart" />
          <div class="menuButtonPart" />
        </div>
        {isMenuOpen ? (
          <div onClick={this.clicked} class="background-tap-listen-helper" />
        ) : null}
        <nav onMouseDown={this.toggleMenu} class={isMenuOpen ? "open" : ""}>
          {this.props.children}
        </nav>
      </div>
    );
  }
}
