import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseStorage";

export default async function addStudentsQuestionsData(){
  const docs = await getDocs(collection(db,"questions")).then(snapshot => snapshot.docs.map(doc => doc.data())[0]).catch(error => error)
  
  const {questions} = docs
  return questions
}