import React from "react";

class ShowDog extends React.Component {
  renderDog = (props) => {
    return (
      <>
        <img src={props.dog.image} alt={props.dog.name} />
        <h2>{props.dog.name}</h2>
        <button
          onClick={() => props.toggleGood(props.dog.id, props.dog.isGoodDog)}
        >
          {props.dog.isGoodDog ? "Good Dog" : "Bad Dog"}
        </button>
      </>
    );
  };

  render() {
    return (
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {this.props.dog.name ? this.renderDog(this.props) : null}
        </div>
      </div>
    );
  }
}

export default ShowDog;
