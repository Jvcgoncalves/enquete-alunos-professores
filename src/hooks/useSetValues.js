import { useState } from "react";


export default function useSetValues(){
  const [values,setValues] = useState(null)

  function updateValuesToUi(contentToUpdate,operation){
    console.log(values);
    if(operation === "add"){
      setValues(state =>{
        if(state[contentToUpdate] === 0 ) return state
        console.log(state);
        console.log(contentToUpdate);
        console.log(state[contentToUpdate]);
        console.log(state.muito_bom);
        return {...state, [contentToUpdate]: {...state, value: state.value + 1}}
      })
    } else {
      setValues(state =>{
        if(state[contentToUpdate] === 0 ) return state
        return {...state, [contentToUpdate]: {...state.value + 1}}
      })
    }
  }

  function startValues(items){
    setValues(items)
    return
  }

  return {values, updateValuesToUi,startValues}
}