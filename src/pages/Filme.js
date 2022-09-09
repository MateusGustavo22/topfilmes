import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../components/header/Header"
import Load from "../components/filmes/load/Load"
import "./Filme.css"
import { BsWallet2, BsClockHistory } from "react-icons/bs"
import { AiOutlineLineChart, AiFillStar, AiFillFileText, AiFillVideoCamera } from "react-icons/ai"
import { MdScreenSearchDesktop } from "react-icons/md"
import { useLocation } from "react-router-dom";

  
function Filme() {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {id} = useParams();
  const [filmeDados, setFilmeDados] = useState([])
  
  const urlApi = "https://api.themoviedb.org/3/movie/"
  const apiKey = "ee5f5a7af99a4db597471bf65c0ea92e"
  const filmeImg = `https://image.tmdb.org/t/p/w500/${filmeDados.poster_path}`
  
  async function getFilmeDados(url) {
    const dados = await axios.get(url)
    setFilmeDados(dados.data)
  }
  
  useEffect(() => {
    const urlDoFilme = `${urlApi}${id}?api_key=${apiKey}`
    getFilmeDados(urlDoFilme)
  }, [])
  
  if (filmeDados.length == 0) {
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
        <div className="filme_area">
          <div className="filme_infos">
            <div className="filme_banner">
              <img src={filmeImg} alt="Banner do filme" />
            </div>
            <div className="filmes_dados">
              <div className="nome">
                <h1>{filmeDados.original_title}</h1>
              </div>
              <div className="tagline">
                <h3>{filmeDados.tagline}</h3>
              </div>
              <div className="infos">
                <div className="nota">
                  <div className="icon">
                    <AiFillStar />
                  </div>
                  <p>Nota:</p>
                  <div className="infos_content">
                    <span>{filmeDados.vote_average.toFixed(1)}</span>
                  </div>
                </div>
                <div className="genero">
                  <div className="icon">
                    <MdScreenSearchDesktop />
                  </div>
                  <p>Gêneros: </p>
                  <div className="infos_content">
                    {filmeDados.genres.map((genero, index) => <ul><li><span>{genero.name}</span></li></ul>)}
                    {console.log(filmeDados)}
                  </div>
                </div>
                <div className="orcamento">
                  <div className="icon">
                    <BsWallet2 />
                  </div>
                  <p>Orçamento:</p>
                  <div className="infos_content">
                    <span>{filmeDados.budget.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
                  </div>
                </div>
                <div className="receita">
                  <div className="icon">
                    <AiOutlineLineChart />
                  </div>
                  <p>Receita:</p>
                  <div className="infos_content">
                    <span>{filmeDados.revenue.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
                  </div>
                </div>
                <div className="duracao">
                  <div className="icon">
                    <BsClockHistory />
                  </div>
                  <p>Duração:</p>
                  <div className="infos_content">
                    <span>{filmeDados.runtime} Minutos</span>
                  </div>
                </div>
                <div className="producao">
                  <div className="icon">
                    <AiFillVideoCamera />
                  </div>
                  <p>Produção:</p>
                  <div className="infos_content">
                    {filmeDados.production_companies.map((prod, index) => <ul><li><span>{prod.name}</span></li></ul>)}
                  </div>
                </div>
                <div className="descricao">
                  <div className="icon">
                    <AiFillFileText />
                  </div>
                  <p>Descrição:</p>
                  <div className="infos_content">
                    <p id="overview">{filmeDados.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Filme