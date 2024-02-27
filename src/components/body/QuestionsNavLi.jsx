import { Link } from "react-router-dom";

export default function QuestionsNavLi({to}){
  return (
    <li className="nav-item">
      <Link to={`${to}`} className="nav-link text-white fs-5 m-0" >
        {to}
      </Link >
    </li>
  )
}