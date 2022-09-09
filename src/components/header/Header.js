import "./Header.css"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai';

function Header() {
  
  const [inputFilme, setInputFilme] = useState("")
  
  const navigate = useNavigate()
  
  function buscarFilme() {
    if (!inputFilme) return
    
    navigate(`/search?q=${inputFilme}`)
  }

  
  return (
    <div className="header">
      <div className="header-area">
        <div className="logo">
          <Link to="/"><h1>TOPFILMES</h1></Link>
          <div className="search">
            <input type="text" placeholder="Buscar filme" value={inputFilme} onChange={(e) => setInputFilme(e.target.value)} />
            <button className="search_button" onClick={buscarFilme} >
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header