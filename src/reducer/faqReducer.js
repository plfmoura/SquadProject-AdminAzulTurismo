import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faq: null,
};

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    //Adicionar Usuario
    setFaq: (state, action) => {
      state.faq = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFaq } = faqSlice.actions;

export default faqSlice.reducer;
