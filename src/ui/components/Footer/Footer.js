import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

export default class Footer {
  render() {
    return (
      <div class="footer">
        <address>
          <span>Jannis Jorre</span>
          <ul>
            <li>
              <span>
                <a href="mailto:jeyj0.plus@gmail.com">jeyj0.plus@gmail.com</a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="https://github.com/jeyj0"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="https://www.xing.com/profile/Jannis_Jorre/"
                  target="_blank"
                  rel="noopener"
                >
                  Xing
                </a>
              </span>
            </li>
          </ul>
        </address>
        <Link href="/impressum">Impressum</Link>
      </div>
    );
  }
}
