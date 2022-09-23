import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './components/characters/charactersSlice';
import { pagesReducer } from './pages/pagesSlice';

export const store = configureStore({
    reducer:{
        pages: pagesReducer,
        characters: charactersReducer
    }
})