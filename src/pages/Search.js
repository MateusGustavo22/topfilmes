import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Header from "../components//header/Header"
import Load from "../components/filmes/load/Load"
import "../components/filmes/Filmes.css"
import FilmeContent from "../components/filmes/FilmeContent"

function Search() {
  const [searchParams] = useSearchParams()
  const [filmesResults, setfilmesResults]  = useState([])
  
  const apiUrl = "https://api.themoviedb.org/3/search/movie/"
  const apiKey = "ee5f5a7af99a4db597471bf65c0ea92e"
  
  const busca = searchParams.get("q")
  
  async function buscarResult() {
    const results = await axios.get(`${apiUrl}?api_key=${apiKey}&query=${busca}`)
    setfilmesResults(results.data.results)
  }
  useEffect(() => {
    buscarResult()
  }, [busca])
  
  if (filmesResults.length == 0) {
    return (
      <>
        <Header />
        <Load />
      </>
    )
  }else {
    return (
      <>
        <Header />
        <div className="filmes_area">
          <h2>Resultados para: {busca}</h2>
          {filmesResults.map((filme) => <FilmeContent dados={filme} />)}
        </div>
      </>
    )
  }
}

export default Search