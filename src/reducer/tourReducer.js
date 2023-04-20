import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tour: null,
};

export const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    //Atualizar todos os tour
    setTour: (state, action) => {
      state.tour = action.payload;
    },
    delTour:(state,action)=>{
      let id=action.payload;
      state.tour=state.tour.filter((item)=>item.id!=id)
    }
  },
});

// Action creators are generated for each case reducer function
export const { setTour,delTour } = tourSlice.actions;

export default tourSlice.reducer;
