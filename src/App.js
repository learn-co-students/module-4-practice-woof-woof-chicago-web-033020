import React, { Component } from "react";
import "./App.css";
import DogBar from "./container/DogBar";
import DogInfo from "./components/DogInfo";

export class App extends Component {
  
  state = {
    pups: [],
    infoPup: null,
    filter: false,
    goodPups: []
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
    this.setState({
      infoPup: pup
    })
  }

  goodDogClick = (pup) => {
    const reqObj = {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ isGoodDog: !pup.isGoodDog })
    }
    fetch(`http://localhost:3000/pups/${pup.id}`, reqObj)
    .then((resp) => resp.json())
    .then((infoPup) => {
      let updatedPups = this.state.pups.map (pup => pup.id === infoPup.id ? infoPup : pup )
      this.setState({
        pups: updatedPups,
        infoPup: infoPup
      })
    });
  }
  
  filterPups = () => {
    this.setState({
      filter: !this.state.filter
    })

  }

  displayPups = () => {
    if(this.state.filter) {
      return this.state.pups.filter(pup => pup.isGoodDog)
    } else {
      return this.state.pups
    }
  }

  render() {
    console.log("app", this.displayPups())
    return (
      <div className="App">
        <div id="filter-div">
          <button id="good-dog-filter" onClick={this.filterPups}>Filter good dogs: {this.state.filter ? "ON" : "OFF"}</button>
        </div>
        <DogBar pups={this.displayPups()} handleClick={this.handleClick}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          {/* <div id="dog-info"> */}
           {this.state.infoPup ? <DogInfo goodDogClick={this.goodDogClick} pup={this.state.infoPup}/> : null }
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default App;
