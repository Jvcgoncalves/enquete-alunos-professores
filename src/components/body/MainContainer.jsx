import { useRef } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import QuestionsNavLi from "./QuestionsNavLi";
import Questions_context from "../../contexts/SetQuestionsPath";

function getForWhoQuestion(path){
  if(path.match("professores")){
    return "professores"
  } else{
    return "alunos"
  }

}

export default function MainContainer(){
  const location = useLocation()
  const {teacherData,studentData} = useLoaderData()
  const path = useRef(getForWhoQuestion(location.pathname))
  return (
    <div className="container">
      <h1 className="h2 text-center">Perguntas {path.current}</h1>
      <div>
        <nav className="navbar w-100 questions-menu bg-dark">
          <ul className="navbar-nav d-flex flex-row justify-content-center w-100 gap-3 align-items-center " >
            {
              path.current === "professores" ? 
              (
                teacherData.map((question,index)=>{
                  return <QuestionsNavLi key={`question_${++index}`} to={++index}/>
                })
              )
              :
              (
                studentData.map((question,index)=>{
                  return <QuestionsNavLi key={`question_${++index}`} to={++index}/>
                })
              )
            }
          </ul>
        </nav>
      </div>
      <Questions_context.Provider value={path.current}>
        <Outlet />
      </Questions_context.Provider>
    </div>
  )
}