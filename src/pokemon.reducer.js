import onli from "onli-reducer"
import axios from "axios"

// Constants
const URL = "https://pokeapi.co/api/v2/pokemon/"

// Public/Sync Actions
const searchPokemon = (state, { name, send }) => {
  _getPokemon({ name, send })
  return state
}

const updateStore = (state, { pokemon, warning }) => {
  if (pokemon) {
    return {
      ...state,
      pokemon: { name: pokemon.name, image: pokemon.sprites.front_shiny },
      warning: ""
    }
  }

  return { ...state, warning }
}

const showLoading = state => ({ ...state, loading: true })
const hideLoading = state => ({ ...state, loading: false })

// Private/Async Actions
const _getPokemon = async ({ name, send }) => {
  const { showLoading, hideLoading, updateStore } = send

  showLoading()
  try {
    const { data } = await axios.get(`${URL}${name}`)
    updateStore({ pokemon: data })
    hideLoading()
  } catch (error) {
    updateStore({ warning: "Ops... Pokémon not found" })
    hideLoading()
  }
}

const actions = {
  searchPokemon,
  updateStore,
  showLoading,
  hideLoading
}

const [pokeReducer, types] = onli(actions)

export { pokeReducer, types }
