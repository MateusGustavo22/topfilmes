import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Filme from "./pages/Filme"
import Search from "./pages/Search"

function App() {
  return (
    <div className="container_global">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}

export default App