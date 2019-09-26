import React from "react"
import { onliSend } from "onli-reducer"

import { pokeReducer, types } from "./pokemon.reducer"

const PokeStateContext = React.createContext()
const PokeDispatchContext = React.createContext()

const PokeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(pokeReducer, {
    pokemon: { name: "", image: "" },
    warning: "",
    loading: false
  })
  const send = onliSend(dispatch, types)

  return (
    <PokeStateContext.Provider value={state}>
      <PokeDispatchContext.Provider value={send}>
        {children}
      </PokeDispatchContext.Provider>
    </PokeStateContext.Provider>
  )
}

const usePokeState = () => {
  const context = React.useContext(PokeStateContext)

  if (context === undefined)
    throw new Error("usePokeState must be used within a PokeProvider")

  return context
}

const usePokeDispatch = () => {
  const context = React.useContext(PokeDispatchContext)

  if (context === undefined)
    throw new Error("usePokeDispatch must be used within a PokeProvider")

  return context
}

const usePokeContexts = () => [usePokeState(), usePokeDispatch()]

export { PokeProvider, usePokeState, usePokeDispatch, usePokeContexts }
