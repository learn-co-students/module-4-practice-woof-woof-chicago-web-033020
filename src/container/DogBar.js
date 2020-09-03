import React, { Component } from "react";
import DogCard from "../components/DogCard";
import DogInfo from "../components/DogInfo"

export class dogBar extends Component {


  renderPups = () => {
    return this.props.pups.map((pup) => {
      return <DogCard key={pup.id} pup={pup} handleClick={this.props.handleClick} />;
    });
  };

  render() {
    return <div id="dog-bar">{this.renderPups()}</div>;
  }
}

export default dogBar;
