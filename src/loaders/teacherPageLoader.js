import addTeacherQuestionsData from "../scripts/addAnswerTeacher";

export default async function teacherPageLoader({params}){
  const {id} = params
  return {data:await addTeacherQuestionsData(), id}
}