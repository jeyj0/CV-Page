import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="center">
          <img src="/assets/avatar.png" alt="Jannis Jorre" />
          <h1>Jannis Jorre</h1>
        </div>
      </div>
    );
  }
}
