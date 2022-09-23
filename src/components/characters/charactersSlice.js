import { createSlice } from '@reduxjs/toolkit'
import CHARACTERS from '../../assests/data/CHARACTERS.json'

const initialState = {
    charactersArray: CHARACTERS
}

const charactersSlice = createSlice({
        name: 'characters',
        initialState
})

export const charactersReducer = charactersSlice.reducer;

export const SelectAllCharacters = (state) => {
    return state.characters.charactersArray;
}

export const SelectCharacterByName = (name) => (state) => {
    return state.characters.charactersArray.find(character => character.name === name);
}
