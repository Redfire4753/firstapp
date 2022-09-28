import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './components/characters/charactersSlice';
import { weaponsReducer } from './components/weapons/weaponsSlice';
import { pagesReducer } from './pages/pagesSlice';

export const store = configureStore({
    reducer:{
        pages: pagesReducer,
        characters: charactersReducer,
        weapons: weaponsReducer
    }
})