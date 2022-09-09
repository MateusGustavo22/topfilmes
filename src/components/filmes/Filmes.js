import {useState, useEffect} from "react"
import axios from "axios"
import "./Filmes.css"
import FilmeContent from "./FilmeContent"
import Load from "./load/Load"

function Filmes(props) {
  const tmdbKey = "ee5f5a7af99a4db597471bf65c0ea92e"
  const tmdbApi = "https://api.themoviedb.org/3/movie/"
  
  var topFilmesUrl = `${tmdbApi}top_rated?api_key=${tmdbKey}`
  
  const [filmesDados, setFilmesDados] = useState([])
  
  async function getMovies(url) {
    const dados = await axios.get(url)
    setFilmesDados(dados.data.results)
  }
  
  useEffect(() => {
    getMovies(topFilmesUrl)
  },[])
  
  if (filmesDados.length == 0) {
    return (<Load />)
  }else {
    return (
      <div className="filmes_area">
         <h2>Melhores filmes</h2>
         {filmesDados.map((filme) => <FilmeContent dados={filme} />)}
      </div>
    )
  }
}

export default Filmes