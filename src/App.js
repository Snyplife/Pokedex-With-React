import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    num : "",
    date : ""
  }
  loadPokemon = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.num}`)
    .then(res => res.json())
    .then(body =>{
      this.setState({
        data : body
      });
    })
    .catch(err => {throw err})
  }

  handleInputChange = (e) =>{
    this.setState({
      num : e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PokéMonster</h1>
        </header>
        <form action="">
          <input type="text" onChange={this.handleInputChange} value={this.state.num}/>
          <button onClick={this.loadPokemon}> Search </button>
        </form>
        <div className="Name-Pokemon">{this.state.data && this.state.data.name}</div>
{this.state.data &&
        <div>
          <img src={this.state.data && this.state.data.sprites.front_default}/>
          <img src={this.state.data && this.state.data.sprites.back_default}/>
          <img src={this.state.data && this.state.data.sprites.front_shiny}/>
          <img src={this.state.data && this.state.data.sprites.back_shiny}/>
        </div>}


        <h2>{this.state.data && this.state.data.types[0].type.name}</h2>
      </div>
    );
  }
}

export default App;
