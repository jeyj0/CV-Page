import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";
import TitleBar from "../TitleBar/TitleBar.js";

export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <TitleBar />
        <div class="center">
          <img class="roundImage" src="/assets/icon.png" alt="Jannis Jorre" />
          <h1>Jannis Jorre</h1>
        </div>
      </div>
    );
  }
}
