import { Component } from "preact";
import data from "../../../lib/data";
import Head from "preact-head";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";

export default class ProjectPage extends Component {
  subTitle = "";
  componentWillReceiveProps = (nextProps, nextState) => {
    let p = data.projects.filter(p => p.id === this.props.id);
    p = p.length == 1 ? p[0] : null;
    if (p == null) this.subTitle = "Project: 404";
    else this.subTitle = "Project: " + p.short_name;
  };

  componentWillMount = () => {
    this.props.minTitleBar();
    this.props.disableMaxTitleBar();
    this.props.setSubTitle(this.subTitle);
  };

  render({ id }) {
    return (
      <div>
        <Head>
          <title>Jannis Jorre - Project</title>
        </Head>
        {!(data.projects.filter(p => p.id === id).length == 1) ? (
          <div>
            <h1>Error 404</h1>
            <p>This project does not exist, as it seems.</p>
          </div>
        ) : (
          <ProjectDetail id={id} />
        )}
      </div>
    );
  }
}
