import { useContext } from "react";
import updateDataToDatabase from "../../scripts/updateDataToDatabase";
import Values_context from "../../contexts/SetValues";

function updateData(questionAnswers,questionData,id){
  updateDataToDatabase(questionAnswers,questionData,id)
}

export default function AnswersPart({question}){

  const question_text = question.text.toLowerCase()
  const {values,updateValuesToUi} = useContext(Values_context)
  
  return(
    <>
      <div className="fs-6 d-flex gap-1 align-items-center">
        <p className=" m-0">{question.text}</p>
        <div className="buttons-div d-flex gap-2 align-items-center justify-content-between rounded-5">
          <button 
          onClick={async () => {  
            updateValuesToUi(question_text,"decrease")
            // updateData(question.answers,data,id)
          }} 
          className="remove-button rounded-0 btn btn-primary"
          >
            -
          </button>
          <span>
            {question.value}
          </span>
          <button 
          onClick={async () => {
            updateValuesToUi(question_text,"add")
            // updateData(question.answers,data,id)
          }} 
          className="add-button rounded-0 btn btn-primary"
          >
            +
          </button>
        </div>
      </div>
    </>
  )
}