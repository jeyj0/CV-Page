import "./style.scss";
import { Component } from "preact";
import Link from "preact-router";

export default class Footer {
  render() {
    return (
      <div class="footer">
        <span>Jannis Jorre</span>
        <span>jeyj0.plus@gmail.com</span>
        {/*<Link href="/impressum">Impressum</Link>*/}
      </div>
    );
  }
}
