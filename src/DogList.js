import React from 'react'

class DogList extends React.Component {
  render(){
    return(
      <div id="dog-bar">
        {this.props.dogs.map(dog => <span onClick={() => this.props.handleClick(dog)}>{dog.name}</span>)}
      </div>
    )
  }
}

export default DogList