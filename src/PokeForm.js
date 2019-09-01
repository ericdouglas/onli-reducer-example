import React, { useState } from "react"

import { usePokeDispatch } from "./PokeContext"

const PokeForm = () => {
  const [name, setName] = useState("")
  const { searchPokemon } = usePokeDispatch()
  const handleInput = event => setName(event.target.value)
  const handleSubmit = event => {
    event.preventDefault()
    name && searchPokemon({ name })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleInput} value={name} />
      <input type='submit' value='Search' onSubmit={handleSubmit} />
    </form>
  )
}

export default PokeForm
