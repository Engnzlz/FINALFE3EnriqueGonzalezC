import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { AppProvider } from "./Components/utils/global.context"; // Importa AppProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider> {/* Envuelve tu aplicación con AppProvider */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id?" element={<Detail />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
