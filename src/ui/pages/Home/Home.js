import { Component } from "react";
import Header from "../../components/Header/Header";
import Head from "preact-head";
import Vars from "../../../lib/Vars";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Jannis Jorre - Home</title>
        </Head>
        <Header />
        <p>Ich heiße Jannis</p>
      </div>
    );
  }
}
