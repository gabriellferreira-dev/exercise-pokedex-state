import React from 'react';
import Pokemon from './Pokemon';
import data from './data';
import Buttons from './components/buttons';

class Pokedex extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      index: 0,
      pokemons: {
        All: data,
        perType: [],
      },
      selected: 'All',
    };
  }

  nextPokemon = () => {
    this.setState(({ index, pokemons, selected }, _props) => ({
      index: index === pokemons[selected].length - 1 ? 0 : index + 1,
    }));
  };

  pokemonsPerType = (value) => data.filter(({ type }) => type === value);

  handleClick = (event) => {
    const { value } = event.target;

    this.setState({
      selected: value !== 'All' ? 'perType' : 'All',
    })
    this.setState((prevState, _props) => ({
      index: 0,
      pokemons: {
        ...prevState.pokemons,
        perType: this.pokemonsPerType(value),
      },
    }));
  };

  render() {
    const { selected, pokemons, index } = this.state;

    return (
      <div className='pokedex'>
        <Pokemon pokemon={pokemons[selected][index]} />
        <div className='buttons'>
          <Buttons
            nextPokemon={this.nextPokemon}
            handleClick={this.handleClick}
            types={[...new Set(data.map(({ type }) => type))]}
          />
        </div>
      </div>
    );
  }
}

export default Pokedex;
