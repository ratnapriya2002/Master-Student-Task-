import StudentLogin from "./components/LoginForm/StudentLoginForm";
import Header from "./components/HeaderOfThePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeacherLogin from "./components/LoginForm/TeacherLoginForm";
import StudentView from "./components/ViewOfTheStudent&MasterPages/StudentView";
import TeacherView from "./components/ViewOfTheStudent&MasterPages/TeacherView";
import './App.css'

const App = () => {
  return ( 
    <>
    <div className="app-container">
         <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Header}></Route>
            <Route exact path="/studentlogin" component={StudentLogin}></Route>
            <Route exact path="/teacherlogin" component={TeacherLogin}></Route>
            <Route exact path="/studentview" component={StudentView}></Route>
            <Route exact path="/teacherview" component={TeacherView}></Route>
          </Switch>
          
         </BrowserRouter>

    </div>

    </>
   );
}
 
export default App;