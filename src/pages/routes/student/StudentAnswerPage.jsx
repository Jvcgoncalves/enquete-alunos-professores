import { useLoaderData } from "react-router-dom";
import AnswersPart from "../../../components/body/AnswersPart";

function getQuestionObject( id,questionData ){
  return questionData.find(question => +question.id === +id)
}

export default function StudentAnswerPage(){
  const {data,id} = useLoaderData()
  const question = getQuestionObject(id,data)

  return (
    <div className="answer-options d-flex flex-column gap-3">
      <h3>
        {question.question}
      </h3>
        {
          question.answers.map(question =>{
            return <AnswersPart key={question.text} 
            id={id}
            question={question}/>
          })
        }      
    </div>
  )
}