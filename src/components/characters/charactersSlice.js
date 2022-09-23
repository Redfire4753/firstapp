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

