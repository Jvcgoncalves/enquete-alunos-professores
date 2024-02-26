import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
import updateDataToDatabase from "../../../scripts/updateDataToDatabase";

function getQuestionObject( id,questionData ){
  return questionData.find(question => +question.id === +id)
}

function updateData(questionAnswers,questionData,id){
  updateDataToDatabase(questionAnswers,questionData,id)
}

export default function StudentAnswerPage(){
  const {data,id} = useLoaderData()
  const question = getQuestionObject(id,data)
  const [values,setValues] = useState(question)

  useEffect (() =>{
    setValues(question.answers)
  }, [question])
  
  return (
    <div className="answer-options d-flex flex-column gap-3">
      {
        values === null ?
      (
        <h3>carregando...</h3>
      )
      :
      (
        <>
          <h3>
            {question.question}
          </h3>
          <div className="fs-6 d-flex gap-1 align-items-center">
            <p className=" m-0">Muito bom</p>
            <div className="buttons-div d-flex gap-2 align-items-center justify-content-between rounded-5">
              <button 
              onClick={async () => {  
                await setValues(state =>{
                  if(state.muito_bom === 0 ) return state
                  question.answers = {...state,muito_bom: state.muito_bom - 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="remove-button rounded-0 btn btn-primary"
              >
                -
              </button>
              <span>
                {values.muito_bom}
              </span>
              <button 
              onClick={async () => {
                await setValues(state => {
                  question.answers = {...state,muito_bom: state.muito_bom + 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="add-button rounded-0 btn btn-primary"
              >
                +
              </button>
            </div>
          </div>
          <div className="fs-6 d-flex gap-1 align-items-center">
            <p className=" m-0">Bom</p>
            <div className="buttons-div d-flex gap-2 align-items-center justify-content-between rounded-5">
              <button 
              onClick={async () => {
                await setValues(state =>{
                  if(state.bom === 0 ) return state
                  question.answers = {...state,bom: state.bom - 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="remove-button rounded-0 btn btn-primary"
              >
                -
              </button>
              <span>
                {values.bom}
              </span>
              <button 
              onClick={async () => {
                await setValues(state =>{
                  question.answers = {...state,bom: state.bom + 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="add-button rounded-0 btn btn-primary"
              >
                +
              </button>
            </div>
            
          </div>
          <div className="fs-6 d-flex gap-1 align-items-center">
            <p className=" m-0">Regular</p>
            <div className="buttons-div d-flex gap-2 align-items-center justify-content-between rounded-5">
              <button 
              onClick={async () => {
                await setValues(state =>{
                  if(state.regular === 0 ) return state
                  question.answers = {...state,regular: state.regular - 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="remove-button rounded-0 btn btn-primary"
              >
                -
              </button>
              <span>
                {values.regular}
              </span>
              <button 
              onClick={async () => {
                await setValues(state =>{
                  question.answers = {...state,regular: state.regular + 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="add-button rounded-0 btn btn-primary"
              >
                +
              </button>
            </div>
            
          </div>
          <div className="fs-6 d-flex gap-1 align-items-center">
            <p className=" m-0">Ruim</p>
            <div className="buttons-div d-flex gap-2 align-items-center justify-content-between rounded-5">
              <button 
              onClick={async () => {
                await setValues(state =>{
                  if(state.ruim === 0 ) return state
                  question.answers = {...state,ruim: state.ruim - 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="remove-button rounded-0 btn btn-primary"
              >
                -
              </button>
              <span>
                {values.ruim}
              </span>
              <button 
              onClick={async () => {
                await setValues(state =>{
                  question.answers = {...state,ruim: state.ruim + 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="add-button rounded-0 btn btn-primary"
              >
                +
              </button>
            </div>
            
          </div>
          <div className="fs-6 d-flex gap-1 align-items-center">
            <p className=" m-0">Muito ruim</p>
            <div className="buttons-div d-flex gap-2 align-items-center justify-content-between rounded-5">
              <button 
              onClick={async () => {
                await setValues(state =>{
                  if(state.muito_ruim === 0 ) return state
                  question.answers = {...state,muito_ruim: state.muito_ruim - 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
              }} 
              className="remove-button rounded-0 btn btn-primary"
              >
                -
              </button>
              <span>
                {values.muito_ruim}
              </span>
              <button 
              onClick={async () => {
                await setValues(state =>{
                  question.answers = {...state,muito_ruim: state.muito_ruim + 1}
                  return question.answers
                })
                updateData(question.answers,data,id)
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
    </div>
  )
}