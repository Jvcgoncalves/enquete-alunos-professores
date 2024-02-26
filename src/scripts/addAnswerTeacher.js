import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebaseStorage";
import { questions_students } from "./questions";

export default async function addTeacherQuestionsData(){
  const docs = await getDocs(collection(db,"questions")).then(snapshot => snapshot.docs.map(doc => doc.data())[1]).catch(error => error)
  console.log(docs);
  
  const {questions} = docs
  return questions
}