import "./style.scss";
import { Component } from "preact";

export default class Menu extends Component {
  state = {
    isMenuOpen: false
  };

  openMenuAndClicked = () => {
    this.props.onClick();
    this.setState({ isMenuOpen: true });
  };

  closeMenuAndClicked = () => {
    this.props.onClick();
    this.setState({ isMenuOpen: false });
  };

  render({ children }, { isMenuOpen }) {
    for (let i = 0; i < children.length; i++)
      children[i].attributes.onClick = this.closeMenuAndClicked;

    return (
      <div class={"menu" + (this.props.class ? " " + this.props.class : "")}>
        <div onClick={this.openMenuAndClicked} class="menuButton">
          <div class="menuButtonPart" />
          <div class="menuButtonPart" />
          <div class="menuButtonPart" />
        </div>
        {isMenuOpen ? (
          <div
            onClick={this.closeMenuAndClicked}
            class="background-tap-listen-helper"
          />
        ) : null}
        <nav /*onClick={this.toggleMenu}*/ class={isMenuOpen ? "open" : ""}>
          {children}
        </nav>
      </div>
    );
  }
}
