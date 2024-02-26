import { useState } from "react";


export default function useSetValues(){
  const [values,setValues] = useState(null)

  function updateValuesToUi(contentToUpdate,operation){
    console.log(values);
    if(operation === "add"){
      setValues(state =>{
        console.log(state);
        if(state[contentToUpdate] === 0 ) return state
        question.answers = {...state, [contentToUpdate]: {...state[question_text] + 1}}
        return question.answers
      })
    } else {
      setValues(state =>{
        if(state[contentToUpdate] === 0 ) return state
        question.answers = {...state, [contentToUpdate]: state[question_text] - 1}
        return question.answers
      })
    }
  }

  function startValues(items){
    setValues(items)
    return
  }

  return {values, updateValuesToUi,startValues}
}