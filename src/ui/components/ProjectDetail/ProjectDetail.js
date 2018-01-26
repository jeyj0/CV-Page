import "./style.scss";
import { Component } from "preact";
import data from "../../../lib/data";
import Project from "../Project/Project";

export default class ProjectDetail extends Component {
  render({ id }) {
    const project = data.projects.filter(p => p.id == id)[0];
    return (
      <div class="projectDetail">
        <Project id={id} img={project.img}>
          <h1>{project.name}</h1>
        </Project>
        <h2>{project.short_name}</h2>
        <p>{project.short_description}</p>
      </div>
    );
  }
}
