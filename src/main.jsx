import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";
import { CardProvider } from "./context/CardContext";
import { TourProvider } from "./context/TourContext";
import { ActionsAlertProvider } from "./context/ActionsAlertContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ActionsAlertProvider>
        <TourProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </TourProvider>
      </ActionsAlertProvider>
    </Provider>
  </React.StrictMode>
);
