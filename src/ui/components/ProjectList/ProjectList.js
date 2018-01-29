import { Component } from "preact";
import Project from "../Project/Project";

export default class ProjectList extends Component {
  render() {
    return (
      <div class="projectList">
        <Project projectID="ajf" img="ajf.PNG">
          <h1>Project name</h1>
          <span>
            This is the project's short desciption. It should not be much longer
            than this.
          </span>
        </Project>
        <Project projectID="ERROR" img="ajf.PNG">
          <h1>Project name</h1>
          <span>
            This is the project's short desciption. It should not be much longer
            than this.
          </span>
        </Project>
        <Project projectID="ajf" img="ajf.PNG">
          <h1>Project name</h1>
          <span>
            This is the project's short desciption. It should not be much longer
            than this.
          </span>
        </Project>
        <Project projectID="ajf" img="ajf.PNG">
          <h1>Project name</h1>
          <span>
            This is the project's short desciption. It should not be much longer
            than this.
          </span>
        </Project>
      </div>
    );
  }
}
