import React from "react";

class Filter extends React.Component {
  state = {
    filter: false,
  };

  handleClick = () => {
    const newFilter = !this.state.filter;
    this.setState((prevState) => ({
      filter: !prevState.filter,
    }));
    this.props.handleFilter(newFilter);
  };

  render() {
    return (
      <div className="App">
        <div id="filter-div">
          <button id="good-dog-filter" onClick={this.handleClick}>
            {this.state.filter
              ? "Filter good dogs: ON"
              : "Filter good dogs: OFF"}
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
