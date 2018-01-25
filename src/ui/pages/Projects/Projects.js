import { Component } from "preact";
import Head from "preact-head";
import TitleBarLayout from "../../components/TitleBarLayout/TitleBarLayout";

export default class Projects extends Component {
  componentWillMount() {
    this.props.setSubTitle("Projects");
    this.props.minTitleBar();
    this.props.disableMaxTitleBar();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Jannis Jorre - Projects</title>
        </Head>
        <h2>Projects</h2>
      </div>
    );
  }
}
