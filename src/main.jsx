import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";
import { CardProvider } from "./context/CardContext";
import { TourProvider } from "./context/TourContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <TourProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </TourProvider>
    </Provider>
  </React.StrictMode>
);
