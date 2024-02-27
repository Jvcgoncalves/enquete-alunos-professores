import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebaseStorage";
import { question_teachers, questions_students } from "./questions";

export default async function addTeacherQuestionsData(){
  const docs = await getDocs(collection(db,"questions")).then(snapshot => snapshot.docs.map(doc => doc.data())[1]).catch(error => error)
  // setDoc(doc(db,"questions","question_teachers"),{questions: question_teachers})
  const {questions} = docs
  return questions
}