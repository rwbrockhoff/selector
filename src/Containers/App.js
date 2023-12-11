import React, {Component} from "react";
import "../index.css";
import "./App.css";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      inputSearch: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchChange = event => {
    this.setState({inputSearch: event.target.value})
  }

  render(){
    const {inputSearch, robots} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(inputSearch.toLowerCase());
    })
    return (
      <div className="App">
        <header>
          <h1 className="title">Robot Search</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
        </header>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
