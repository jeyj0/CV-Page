import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

import TitleBar from "../TitleBar/TitleBar";

export default class TitleBarLayout extends Component {
  render({ sizeState, title, subtitle, children }, state) {
    return (
      <div class="titleBarLayout">
        <TitleBar sizeState={sizeState} title={title} subtitle={subtitle} />
        <div class="content">{children}</div>
      </div>
    );
  }
}
