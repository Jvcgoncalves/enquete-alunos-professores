import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="header container-fluid ">
      <nav className="navbar w-100 question-to-menu">
          <ul className="navbar-nav d-flex flex-row justify-content-center w-100 gap-3 align-items-center ">
            <li className="nav-item">
              <Link to={"alunos"} className="nav-link text-white fs-5">
                Votar perguntas dos alunos
              </Link>
            </li>
            <span className="fs-4">|</span>
            <li className="nav-item">
              <Link to={"professores"} className="nav-link text-white fs-5 active">
                Votar perguntas dos profs
              </Link>
            </li>
            <li className="nav-item hide close-button-nav">
              <button className="btn btn-primary close-btn">
                <i className="bi bi-x-lg"></i>
              </button>
            </li>
          </ul>
        </nav>
        
        <button className="btn btn-primary menu-hamburguer hide">
          <i className="bi bi-list "></i>
        </button>
    </header>
  )
}