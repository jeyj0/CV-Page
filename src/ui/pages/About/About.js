import { Component } from "preact";
import Head from "preact-head";
import TitleBarLayout from "../../components/TitleBarLayout/TitleBarLayout";

export default class About extends Component {
  componentWillMount() {
    this.props.setSubTitle("About");
    this.props.minTitleBar();
    this.props.disableMaxTitleBar();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Jannis Jorre - About</title>
        </Head>
        <h2>About</h2>
      </div>
    );
  }
}
