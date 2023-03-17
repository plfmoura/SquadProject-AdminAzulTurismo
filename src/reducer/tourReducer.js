import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tour: null,
};

export const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    //Adicionar Usuario
    setTour: (state, action) => {
      state.tour = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTour } = tourSlice.actions;

export default tourSlice.reducer;
