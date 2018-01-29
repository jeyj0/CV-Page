import { Component } from "preact";
import data from "../../../lib/data";
import Head from "preact-head";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";

export default class ProjectPage extends Component {
  subTitle = "";
  refreshSubTitle = true;

  componentWillReceiveProps = (nextProps, nextState) =>
    (this.refreshSubTitle = true);

  getSubTitle = () => {
    if (this.refreshSubTitle) {
      let p = data.projects.filter(p => p.id === this.props.projectID);
      p = p.length == 1 ? p[0] : null;
      if (p == null) this.subTitle = "Project: 404";
      else this.subTitle = "Project: " + p.short_name;
      this.refreshSubTitle = false;
      return this.subTitle;
    }
    return this.subTitle;
  };

  componentDidMount = () => {
    this.props.minTitleBar();
    this.props.disableMaxTitleBar();
    //console.log(this.subTitle);
    this.props.setSubTitle(this.getSubTitle());
  };

  render({ projectID }) {
    return (
      <div>
        <Head>
          <title>Jannis Jorre - Project</title>
        </Head>
        {!(data.projects.filter(p => p.id === projectID).length == 1) ? (
          <div>
            <h1>Error 404</h1>
            <p>This project does not exist, as it seems.</p>
          </div>
        ) : (
          <ProjectDetail projectID={projectID} />
        )}
      </div>
    );
  }
}
