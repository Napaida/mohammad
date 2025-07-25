import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    counterValue: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incerement (state, action){
            state.counterValue++;
        },
        decrement(state,action){
            state.counterValue--
        },
        zero(state){
            state.counterValue = 0
        }
    }
})
export default counterSlice.reducer
export const {incerement, decrement, zero} = counterSlice.actions
export const selectCounter = (state)=> state.counter.counterValue