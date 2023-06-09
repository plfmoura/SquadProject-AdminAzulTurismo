import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    //Adicionar Usuario
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    delAdmin: (state) => {
      state.admin = null;
      localStorage.removeItem("azul_admin");
      localStorage.removeItem("token_admin");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAdmin, delAdmin } = adminSlice.actions;

export default adminSlice.reducer;
