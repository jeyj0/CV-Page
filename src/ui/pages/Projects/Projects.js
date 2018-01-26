import { Component } from "preact";
import Head from "preact-head";
import ProjectList from "../../components/ProjectList/ProjectList";

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
        <ProjectList />
      </div>
    );
  }
}
