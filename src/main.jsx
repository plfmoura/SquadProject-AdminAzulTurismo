import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";
import { CardProvider } from "./context/CardContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CardProvider>
        <App />
      </CardProvider>
    </Provider>
  </React.StrictMode>
);
