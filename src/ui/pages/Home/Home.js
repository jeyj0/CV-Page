import { Component } from "react";
import Header from "../../components/Header/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Ich heiße Jannis</p>
      </div>
    );
  }
}
