import { Component } from "preact";

import TitleBarLayout from "../../components/TitleBarLayout/TitleBarLayout";

export default class CurriculumVitae extends Component {
  componentWillMount() {
    this.props.setSubTitle("Curriculum Vitae");
    this.props.minTitleBar();
    this.props.disableMaxTitleBar();
  }

  render() {
    return (
      <div>
        <h2>CurriculumVitae</h2>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    );
  }
}
