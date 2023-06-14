import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/context/AuthContextProvider";
import Toastify from "./components/mainComponents/Toastify/Toastify";
import ProopsContextProvider from "./components/context/ProopsContextProvider";
import ModalsContextProvider from "./components/context/ModalsContextProvider";
import MusicContextProvider from "./components/context/MusicContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MusicContextProvider>
        <ModalsContextProvider>
          <ProopsContextProvider>
            <AuthContextProvider>
              <Toastify />
              <App />
            </AuthContextProvider>
          </ProopsContextProvider>
        </ModalsContextProvider>
      </MusicContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
