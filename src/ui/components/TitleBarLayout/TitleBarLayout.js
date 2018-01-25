import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

import TitleBar from "../TitleBar/TitleBar";

export default class TitleBarLayout extends Component {
  render({ maximizable, sizeState, title, subtitle, children }, state) {
    return (
      <div class="titleBarLayout">
        <TitleBar
          maximizable={maximizable}
          sizeState={sizeState}
          title={title}
          subtitle={subtitle}
        />
        <div class="content">{children}</div>
      </div>
    );
  }
}
