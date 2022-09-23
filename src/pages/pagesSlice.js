import { createSlice } from '@reduxjs/toolkit';
import { PAGES } from '../assests/data/PAGES';

const initialState = {
    pagesArray: PAGES
}

const pagesSlice = createSlice({
    name: 'pages',
    initialState
})

export const pagesReducer = pagesSlice.reducer;

export const SelectAllPages = (state) => {
    return state.pages.pagesArray;
}