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
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
}

export default SearchBar;
