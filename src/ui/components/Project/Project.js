import "./style.scss";
import { Component } from "preact";

export default class Project extends Component {
  render({ projectID, img, children }) {
    return (
      <a href={"/project/" + projectID}>
        <div class="project">
          <img class="bgImg" src={"/assets/projects/" + img} />
          <div class="info">{children}</div>
        </div>
      </a>
    );
  }
}
