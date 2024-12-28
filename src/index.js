import ReactDOM from "react-dom/client"
import Home from "./pages/home/index"
import Films from "./pages/films/index"
import Livres from "./pages/livres/index"
import Musiques from "./pages/musiques/index"
import "./global.css"
import "./normalize.css"

import { Routes, Route, BrowserRouter } from "react-router-dom"
import React from "react"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/livres" element={<Livres />} />
        <Route path="/musiques" element={<Musiques />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
