import { Component } from "react";
import Header from "../../components/Header/Header";
import Head from "preact-head";
import Vars from "../../../lib/Vars";

import TitleBarLayout from "../../components/TitleBarLayout/TitleBarLayout";

export default class Home extends Component {
  componentWillMount() {
    this.props.setSubTitle();
    this.props.enableMaxTitleBar();
    this.props.maxTitleBar();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Jannis Jorre - Home</title>
        </Head>
        <h2>Home</h2>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
        <p>Text</p>
      </div>
    );
  }
}
