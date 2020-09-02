import React, { Component } from "react";
import DogCard from "../components/DogCard";
import DogInfo from "../components/DogInfo"

export class dogBar extends Component {
  state = {
    pups: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/pups")
      .then((resp) => resp.json())
      .then((pups) => {
        this.setState({
          pups: pups,
        });
      });
  }

  handleClick = (pup) => {
    console.log(pup)
   return <DogInfo pup={pup} />
  };

  renderPups = () => {
    return this.state.pups.map((pup) => {
      return <DogCard key={pup.id} pup={pup} handleClick={this.handleClick} />;
    });
  };

  render() {
    return <div id="dog-bar">{this.renderPups()}</div>;
  }
}

export default dogBar;
