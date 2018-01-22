import "./style";
import { Component } from "preact";
import { Link } from "preact-router/match";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link activeClassName="active" href="/cv">
            Curriculum Vitae
          </Link>
          <Link activeClassName="active" href="/projects">
            Projects
          </Link>
          <Link activeClassName="active" href="/about">
            About
          </Link>
        </nav>
      </div>
    );
  }
}
