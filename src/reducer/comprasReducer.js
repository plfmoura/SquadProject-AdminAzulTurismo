import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compras: null,
};

export const comprasSlice = createSlice({
  name: "compras",
  initialState,
  reducers: {
    //Adicionar Usuario
    setCompras: (state, action) => {
      state.compras = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCompras } = adminSlice.actions;

export default comprasSlice.reducer;
