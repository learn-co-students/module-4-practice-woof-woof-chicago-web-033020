import React from "react";
import Filter from "./Filter";
import DogList from "./DogList";
import ShowDog from "./ShowDog";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      selected: {},
      filter: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pups")
      .then((resp) => resp.json())
      .then((dogData) => {
        this.setState({
          dogs: dogData,
        });
      });
  }

  handleClick = (dog) => {
    this.setState({
      selected: dog,
    });
  };

  toggleGood = (id, isGoodDog) => {
    fetch(`http://localhost:3000/pups/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isGoodDog: !isGoodDog }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        const updatedDogs = this.state.dogs.map((dog) =>
          dog.id === json.id ? json : dog
        );
        this.setState({
          dogs: updatedDogs,
          selected: json,
        });
      });
  };

  handleFilter = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  render() {
    return (
      <div>
        <Filter handleFilter={this.handleFilter} />
        <DogList
          dogs={
            this.state.filter
              ? this.state.dogs.filter((dog) => dog.isGoodDog === true)
              : this.state.dogs
          }
          handleClick={this.handleClick}
        />
        <ShowDog dog={this.state.selected} toggleGood={this.toggleGood} />
      </div>
    );
  }
}

export default App;
