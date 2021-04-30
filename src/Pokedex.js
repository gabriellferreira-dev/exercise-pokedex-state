import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data'

class Pokedex extends React.Component {
  constructor() {
    super();
    this.setPokemon = this.setPokemon.bind(this);
    this.getPokemonType = this.getPokemonType.bind(this);
    this.state = {
      pokemonIndex: 0,
      pokemon: pokemons,
    }
  }

  setPokemon = () => {
    this.setState(({ pokemonIndex, pokemon }, _props) => ({
      pokemonIndex: pokemonIndex === pokemon.length - 1 ? 0 : pokemonIndex + 1,
    }));
  }

  getPokemonType = (event) => {
    const pokemon = pokemons.filter(({ type }) => type === event.target.value);
    console.log(pokemon)
    this.setState(() => ({
      pokemonIndex: 0,
      pokemon: pokemon,
    }))
  }

  render() {
    return (
      <div className="pokedex">
        <Pokemon pokemon={this.state.pokemon[this.state.pokemonIndex]}/>
        <div className="buttons">
          <button onClick={this.setPokemon}>Próximo</button>
          <button onClick={this.getPokemonType} value="Fire">Fire</button>
          <button onClick={this.getPokemonType} value="Psychic">Psychic</button>
        </div>
    </div>
    );
  }
}

export default Pokedex;