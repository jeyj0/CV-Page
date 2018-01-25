import { Component } from "preact";

import TitleBarLayout from "../../components/TitleBarLayout/TitleBarLayout";

export default class Projects extends Component {
  componentWillMount() {
    this.props.setSubTitle("Projects");
    this.props.minTitleBar();
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
      </div>
    );
  }
}
