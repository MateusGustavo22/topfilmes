import "./FilmeContent.css"
import { AiFillStar } from "react-icons/ai"
import { Link, Outlet } from "react-router-dom"

function FilmeContent(props) {
  const filmeImg = `https://image.tmdb.org/t/p/w500/${props.dados.poster_path}`
  return (
    <div className="filme">
      <div className="filme_photo">
        <Link to={`/filme/${props.dados.id}`}><img src={filmeImg} alt="capa do filme" /></Link>
      </div>
      <div className="filme_description">
        <h3>{props.dados.original_title}</h3>
        <div className="nota">
          <div className="nota_icon">
            <AiFillStar />
          </div>
          <span>{props.dados.vote_average}</span>
        </div>
      </div>
    </div>
  )
}

export default FilmeContent