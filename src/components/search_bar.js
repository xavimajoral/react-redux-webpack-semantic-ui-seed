import React, { Component } from 'react';

// New Class component
class SearchBar extends Component {
  // All javascript classes have a special function called constructor
  // The constructor is the first and only function called automatically Whenever a new instance class is created
  constructor(props) {
    super(props);

    //Only inside the constructor is where we manipulat ethe state like below
    this.state = { term: '' };
  }
  render() {
    // return <input onChange={this.onInputChange} />;
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  //State: plain javascript object that is used to record and react to user events
  //Each Class based component that we define has its own State Object.
  //Whenever the Component State changes the component immediatly re-renders and also all of its children
  //We need to initialise the State object
}

export default SearchBar;
