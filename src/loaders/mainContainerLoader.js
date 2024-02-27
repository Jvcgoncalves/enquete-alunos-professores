import addStudentsQuestionsData from "../scripts/addAnswerStudent"
import addTeacherQuestionsData from "../scripts/addAnswerTeacher"

export default async function mainPageLoader(){
  return {teacherData:await addTeacherQuestionsData(), studentData: await addStudentsQuestionsData()}
}