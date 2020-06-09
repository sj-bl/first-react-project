import React, { Component } from "react";

import "./App.css";
import { CardList } from "./components/cards-list/card-list.components";
import { SearchBox } from "./components/searchBox/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchField: "",
    };
  }
  componentDidMount() {
    try {
      fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
        .then((res) => res.json())
        .then((data) => this.setState({ recipes: data.recipes }));
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { recipes, searchField } = this.state;

    const filterRecipe = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search.."
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        {/* <h1>{filterRecipe}</h1> */}
        <CardList recipes={Object.values(filterRecipe)} />
      </div>
    );
  }
}

export default App;
