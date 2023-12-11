import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from "./robots";

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      inputSearch: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({inputSearch: event.target.value})
  }

  render(){
    const {inputSearch} = this.state;
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(inputSearch.toLowerCase());
    })
    return (
      <div className="App">
        <h1>Robot Search</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
