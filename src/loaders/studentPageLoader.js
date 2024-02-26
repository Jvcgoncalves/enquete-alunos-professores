import addQuestionsData from "../scripts/addAnswerStudent";

export default async function studentPageLoader({params}){
  const {id} = params
  return {data:await addQuestionsData(), id}
}