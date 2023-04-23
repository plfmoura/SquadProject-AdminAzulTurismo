import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  duvidas: null,
};

export const duvidasSlice = createSlice({
  name: "duvidas",
  initialState,
  reducers: {
    setDuvidas: (state, action) => {
      state.duvidas = action.payload;
    },
    updateDuvida: (state, action) => {
      console.log(action.payload)
      state.duvidas = state.duvidas.map((item) =>
        item.id_duvida === action.payload.id
        ? { ...item, response: action.payload.response }
        : item
    )},
    delDuvida:(state,action)=>{
      let id=action.payload;
      state.duvidas=state.duvidas.filter((item)=>item.id_duvida!=id)
    },
    }
  });

// Action creators are generated for each case reducer function
export const { setDuvidas, updateDuvida, delDuvida } = duvidasSlice.actions;

export default duvidasSlice.reducer;
