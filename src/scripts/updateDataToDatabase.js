import {  doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseStorage";
import addStudentsQuestionsData from "./addAnswerStudent";
import addTeacherQuestionsData from "./addAnswerTeacher";

export default async function updateDataToDatabase({newAnswer,questionIdToUpdateAnswers,docRef}){
  const doc_path = docRef === "alunos" ? "question_students" : "question_teachers"
  const functionToCall = docRef === "alunos" ? addStudentsQuestionsData : addTeacherQuestionsData
  const newQuestionsData = await functionToCall().then(res =>res.map( question => {
    if(+question.id === +questionIdToUpdateAnswers) {
      return {...question, answers: newAnswersArray({answersArray:question.answers,newAnswer:newAnswer})}
    }
    else return question
  })).catch(e => e.message)

  setDoc(doc(db,"questions",doc_path),{questions: newQuestionsData})
}

function newAnswersArray({answersArray,newAnswer}){
  return answersArray.map(answer =>{
    if(answer.text.toLowerCase() === newAnswer.text.toLowerCase()) return newAnswer
    else return answer
  })
}