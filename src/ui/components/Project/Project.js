import "./style.scss";
import { Component } from "preact";

export default class Project extends Component {
  render({ img, children }) {
    return (
      <div class="project">
        <img class="bgImg" src={img} />
        <div class="info">{children}</div>
      </div>
    );
  }
}
