"use strict";

const element = React.createElement;

class BeforeAfter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showBefore: true };
  }

  setShowBefore(value) {
    this.setState({
      showBefore: value,
    });
  }

  render() {
    let imageUrl;
    let alt;
    if (this.state.showBefore) {
      imageUrl = this.props.before;
      alt = "car before dent repair";
    } else {
      imageUrl = this.props.after;
      alt = "car after dent repair";
    }

    return (
      <div>
        <div className="carousel-container">
          <div className="numbertext"></div>
          <img src={imageUrl} loading={"lazy"} style={{ width: "100%" }} alt={alt} />
          <div className="row">
            <div className="image-carousel">
              <button
                className={`before-btn demo cursor ${
                  this.state.showBefore ? "before-after-active" : ""
                }`}
                onClick={() => this.setShowBefore(true)}
              >
                Before
              </button>
              <button
                className={`after-btn demo cursor ${
                  !this.state.showBefore ? "before-after-active" : ""
                }`}
                onClick={() => this.setShowBefore(false)}
              >
                After
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll(".before-after-container").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  const before = domContainer.dataset.before;
  const after = domContainer.dataset.after;
  ReactDOM.render(
    element(BeforeAfter, {
      before: before,
      after: after,
    }),
    domContainer
  );
});
