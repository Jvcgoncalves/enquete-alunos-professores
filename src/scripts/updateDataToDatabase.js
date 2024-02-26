import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseStorage";

export default function updateDataToDatabase(questionAnswers,questionData,id){

  const newQuestionsData = questionData.map( question => {
    if(question.id === id) return {...question, answers: questionAnswers}
    else return question
  });

  setDoc(doc(db,"questions","question_students"),{questions: newQuestionsData})
}