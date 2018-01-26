import { Component } from "preact";
import Head from "preact-head";

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
      </div>
    );
  }
}
