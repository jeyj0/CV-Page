import { Component } from "preact";
import IDs from "../../../lib/HackyIDSystem";

export default class FallbackImage extends Component {
  state = { id: IDs.register() };

  imageError = e => {
    e.target.removeEventListener("error", this.imageError);
    e.target.src = this.props.fallbackSrc;
  };

  componentDidMount = () =>
    document
      .getElementById(this.state.id)
      .addEventListener("error", this.imageError, { passive: true });

  componentWillUnmount = () =>
    document
      .getElementById(this.state.id)
      .removeEventListener("error", this.imageError);

  render({ src, fallbackSrc, alt }, { id }) {
    return (
      <img
        id={id}
        class={
          "fallbackImage" + (this.props.class ? " " + this.props.class : "")
        }
        src={src}
        alt={alt}
      />
    );
  }
}
