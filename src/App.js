import React from "react"

import { PokeProvider } from "./PokeContext"
import PokeDisplay from "./PokeDisplay"
import PokeForm from "./PokeForm"

const App = () => (
  <PokeProvider>
    <PokeDisplay />
    <PokeForm />
  </PokeProvider>
)

export default App
