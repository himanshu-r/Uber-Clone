import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 cars: []
}

const carSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addCar: (state, actions) => {}
    
    }
});

export const {
    addCar

} = carSlice.actions

//Selectors
// export  const selectCars = state => state.items.cars
export default carSlice.reducer