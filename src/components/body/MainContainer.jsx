import { Link, Outlet } from "react-router-dom";

export default function MainContainer(){
  return (
    <div className="container">
      <h1 className="h2 text-center">Perguntas alunos</h1>
      <div>
        <nav className="navbar w-100 questions-menu bg-dark">
          <ul className="navbar-nav d-flex flex-row justify-content-center w-100 gap-3 align-items-center " >
            <li className="nav-item">
              <Link to={"1"} className="nav-link text-white fs-5 m-0" >
                1
              </Link >
            </li>
            <span className="fs-4">|</span>
            <li className="nav-item">
              <Link to={"2"} className="nav-link text-white fs-5 m-0" >
                2
              </Link >
            </li>
            <span className="fs-4">|</span>
            <li className="nav-item">
              <Link to={"3"} className="nav-link text-white fs-5 m-0" >
                3
              </Link >
            </li>
            <span className="fs-4">|</span>
            <li className="nav-item">
              <Link to={"4"} className="nav-link text-white fs-5 m-0" >
                4
              </Link >
            </li>
            <span className="fs-4">|</span>
            <li className="nav-item">
              <Link to={"5"} className="nav-link text-white fs-5 m-0" >
                5
              </Link >
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}