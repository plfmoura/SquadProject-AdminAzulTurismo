import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faq: null,
};

export const duvidasSlice = createSlice({
  name: "duvidas",
  initialState,
  reducers: {
    setDuvidas: (state, action) => {
      state.duvidas = action.payload;
    },
    updateDuvida: (state, action) => {
      state.duvidas = state.duvidas.map((item) =>
        item.id === action.payload.id
          ? { ...item, response: action.payload.newResponse }
          : item
    )},
    }
  });

// Action creators are generated for each case reducer function
export const { setDuvidas, updateDuvida } = duvidasSlice.actions;

export default duvidasSlice.reducer;
