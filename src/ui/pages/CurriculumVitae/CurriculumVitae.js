import { Component } from "preact";
import Head from "preact-head";
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
        <Head>
          <title>Jannis Jorre - CV</title>
        </Head>
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
