import React, {Fragment} from 'react';

export default class Buttons extends React.Component {
  render() {
    const { types, handleClick, nextPokemon } = this.props;
    return (
      <Fragment>
        <button onClick={handleClick} value='All'>All</button>
        {types.map((type) => <button onClick={handleClick} value={type} key={type}>{type}</button>)}
        <button onClick={nextPokemon} >Próximo</button>
      </Fragment>
    )
  }
}