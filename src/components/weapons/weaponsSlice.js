import { createSlice } from '@reduxjs/toolkit'
import WEAPONS from '../../assests/data/WEAPONS.json'

const initialState = {
    weaponsArray: WEAPONS
}

const weaponsSlice = createSlice({
        name: 'weapons',
        initialState
})

export const weaponsReducer = weaponsSlice.reducer;

export const SelectAllWeapons = (state) => {
    return state.weapons.weaponsArray;
}

export const SelectWeaponByName = (name) => (state) => {
    return state.weapons.weaponsArray.find(weapon => weapon.name === name);
}