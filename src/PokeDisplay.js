import React from 'react'

import { usePokeState } from './PokeContext'
import Loading from './Loading'

const PokeDisplay = () => {
  const { pokemon, warning, loading } = usePokeState()

  return (
    <>
      {loading && <Loading />}

      <h1>onli-reducer example</h1>
      <h2>The current shiny Pokémon is {pokemon.name.toUpperCase()}</h2>

      {pokemon.image ? (
        <img src={pokemon.image} alt={pokemon.name} />
      ) : (
        <div className='empty' />
      )}

      {warning && <p>{warning}</p>}
    </>
  )
}

export default PokeDisplay
