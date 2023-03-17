import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../reducer/adminReducer";
import comprasReducer from "../reducer/comprasReducer";
import tourReducer from "../reducer/tourReducer";
import usersReducer from "../reducer/usersReducer";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    compras: comprasReducer,
    users: usersReducer,
    tour: tourReducer,
  },
});
