import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

import TitleBar from "../TitleBar/TitleBar";

export default class TitleBarLayout extends Component {
  state = {
    showShadow: false
  };
  scrollHandler = e => {
    if (this.scrollLock) return;
    this.scrollLock = true;
    if (e.target.scrollTop === 0) {
      this.setState({ showShadow: false });
    } else {
      this.setState({ showShadow: true });
    }
    this.scrollLock = false;
  };
  componentDidMount = () => {
    document
      .getElementById("content")
      .addEventListener("scroll", this.scrollHandler, { passive: true });
  };
  componentWillUnmount = () => {
    document
      .getElementById("content")
      .removeEventListener("scroll", this.scrollHandler);
  };

  render(
    { maximizable, sizeState, title, subtitle, children },
    { showShadow }
  ) {
    return (
      <div class="titleBarLayout">
        <div id="content" class="content">
          {children}
        </div>
        <TitleBar
          maximizable={maximizable}
          sizeState={sizeState}
          title={title}
          subtitle={subtitle}
          showShadow={showShadow}
        />
      </div>
    );
  }
}
