import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./routes/DefaultLayout";
import Student from "./routes/student/Students";
import Teachers from "./routes/teachers/Teachers";
import StudentAnswerPage from "./routes/student/StudentAnswerPage";
import studentPageLoader from "../loaders/studentPageLoader";
import TeachersAnswerPage from "./routes/teachers/TeachersAnswerPage";
import teacherPageLoader from "../loaders/teacherPageLoader";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children:[
      {
        path:"/alunos",
        element: <Student />,
        children: [
          {
            path:":id",
            element: <StudentAnswerPage />,
            loader: studentPageLoader
          }
        ]
      },
      {
        path:"/professores",
        element: <Teachers />,
        children: [
          {
            path: ":id",
            element: <TeachersAnswerPage />,
            loader: teacherPageLoader
          }
        ]
      }
    ]
  }
])

export default routes