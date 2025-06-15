
// In Recoil, an atom is a unit of state.
// It represents a piece of state that can be read from and written to by various components in your React application.

import { atom } from "recoil";

export const countState = atom({
    key: 'countState', // unique ID (with respect to other atoms/selectors)
    default: 0,         // default value (aka initial value)
})