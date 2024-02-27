import { useContext, useEffect, useState } from "react";
import updateDataToDatabase from "../../scripts/updateDataToDatabase";
import Questions_context from "../../contexts/SetQuestionsPath";

function updateData(answer,id,docRef){
  updateDataToDatabase({newAnswer:answer,questionIdToUpdateAnswers:id,docRef})
}

export default function AnswersPart({question,id}){
  const [questionData,setQuestionData] = useState(question)
  useEffect(()=>{
    setQuestionData(question);
  },[question])
  const path = useContext(Questions_context)
  return(
    <>
      <div className="fs-6 d-flex gap-3 my-3 align-items-center flex-wrap">
        <p className="fs-5 m-0">{questionData.text}</p>
        <div className="buttons-div d-flex gap-2 align-items-center justify-content-between rounded-5">
          <button 
          onClick={async () => {
            let newState;  
            await setQuestionData(state => {
              if(state.value === 0 ) {
                newState = "stop"
                return state
              }
              newState = {...state,value: state.value - 1}
              return newState
             })
             if(newState === "stop") return
             updateData(newState,id,path)
          }} 
          className="remove-button rounded-0 btn btn-primary"
          >
            -
          </button>
          <span>
            {questionData.value}
          </span>
          <button 
          onClick={async () => {
            let newState;
            await setQuestionData(state => {  
              newState = {...state,value: state.value + 1}
              return newState
             })
             updateData(newState,id,path)
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