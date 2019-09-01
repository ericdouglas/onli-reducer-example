import React from "react"

import { usePokeState } from "./PokeContext"
import Loading from "./Loading"

const PokeDisplay = () => {
  const { pokemon, warning, loading } = usePokeState()

  return (
    <>
      {loading && <Loading />}

      <h1>onli-reducer example</h1>
      <h2>{`The current shiny Pokémon is ${pokemon.name}`}</h2>

      <img src={pokemon.image} alt={pokemon.name} />

      {warning && <p>{warning}</p>}
    </>
  )
}

export default PokeDisplay
