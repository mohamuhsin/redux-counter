import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decreament(state) {
            state.counter--;
        },
        increases(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;
