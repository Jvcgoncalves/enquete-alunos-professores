import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import testFirebase from "../../scripts/addAnswerStudent";
testFirebase()
export default function DefaultLayout(){
  return(
    <div id="App" className="pb-5">
      <Header />
      <Outlet />
    </div>
  )
}