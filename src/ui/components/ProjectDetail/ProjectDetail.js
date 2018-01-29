import "./style.scss";
import { Component } from "preact";
import data from "../../../lib/data";
import Project from "../Project/Project";

export default class ProjectDetail extends Component {
  render({ projectID }) {
    const project = data.projects.filter(p => p.id == projectID)[0];
    return (
      <div class="projectDetail">
        <Project projectID={projectID} img={project.img}>
          <h1>{project.name}</h1>
        </Project>
        <h2>{project.short_name}</h2>
        <p>{project.short_description}</p>
      </div>
    );
  }
}
