import { RouterProvider } from "react-router-dom";
import routes from "./pages/Routes.jsx";

export default function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

