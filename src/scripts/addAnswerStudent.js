import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebaseStorage";
import { questions_students } from "./questions";

export default async function addStudentsQuestionsData(){
  const docs = await getDocs(collection(db,"questions")).then(snapshot => snapshot.docs.map(doc => doc.data())[0]).catch(error => error)
  setDoc(doc(db, "questions", "question_students"),{questions: questions_students} )
  const {questions} = docs
  return questions
}