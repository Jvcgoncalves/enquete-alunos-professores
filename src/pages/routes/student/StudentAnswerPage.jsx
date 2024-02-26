import { useLoaderData } from "react-router-dom";
import AnswersPart from "../../../components/body/AnswersPart";
import Values_context from "../../../contexts/SetValues";
import useSetValues from "../../../hooks/useSetValues";

function getQuestionObject( id,questionData ){
  return questionData.find(question => +question.id === +id)
}

export default function StudentAnswerPage(){
  const {data,id} = useLoaderData()
  const question = getQuestionObject(id,data)
  const {values,updateValuesToUi,startValues} = useSetValues()

  if(values === null){
    startValues(question.answers)
  }

  return (
    <div className="answer-options d-flex flex-column gap-3">
      <h3>
        {question.question}
      </h3>
      <Values_context.Provider value={{values,updateValuesToUi}}>
        {
          question.answers.map(question =>{
            return <AnswersPart key={question.text} question={question}/>
          })
        }
      </Values_context.Provider>
      
</div>
  )
}