import React, { Component } from "react";
import DogCard from "../components/DogCard";

export class dogBar extends Component {

  renderPups = () => {
    console.log('dogBar', this.props.pups)
    return this.props.pups.map((pup) => {
      return <DogCard key={pup.id} pup={pup} handleClick={this.props.handleClick} />;
    });
  };

  render() {
    return <div id="dog-bar">{this.renderPups()}</div>;
  }
}

export default dogBar;
