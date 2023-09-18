import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PokemonsStats } from "../../helpers/Types";

const initialState: PokemonsStats = {
  name: "",
  url: "",
  height: 0,
  id: 0,
  weight: 0,
  abilities: [],
  forms: [],
  hp: {
    base_stat: 0,
    effort: 0,
    stat: {
      name: "",
      url: "",
    },
  },
  speed: {
    base_stat: 0,
    effort: 0,
    stat: {
      name: "",
      url: "",
    },
  },
  front_default: "",
};

export const currentPokemonReducer = createSlice({
  name: "currentPokemonReducer",
  initialState,
  reducers: {
    setCurrentPokemon: (state, action: PayloadAction<PokemonsStats>) => {
      const {
        payload: {
          name,
          url,
          height,
          id,
          weight,
          abilities,
          forms,
          hp,
          speed,
          front_default,
        },
      } = action;

      state.name = name ?? state.name
      state.url = url ?? state.url
      state.height = height ?? state.height
      state.id = id ?? state.id
      state.weight = weight ?? state.weight
      state.abilities = abilities ?? state.abilities
      state.hp = hp ?? state.hp
      state.forms = forms ?? state.forms
      state.speed = speed ?? state.speed
      state.front_default = front_default ?? state.front_default
    },
  },
});

export const { setCurrentPokemon } = currentPokemonReducer.actions
export default currentPokemonReducer.reducer