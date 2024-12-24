import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useState } from 'react'
import './App.css'
import NavBar from './components/common/NavBar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import StudentsView from "./components/student/StudentsView";
import AddStudent from "./components/student/AddStudent";
import StudentProfile from "./components/student/StudentProfile";
import EditStudent from "./components/student/EditStudent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
            <NavBar />
            <Routes>
              <Route 
                  exact 
                  path = "/"
                  element = {<Home />}></Route>
              <Route
                    exact
                    path="/view-students"
                    element = {<StudentsView />}></Route>
              <Route 
                  exact
                  path="/add-students"
                  element = {<AddStudent />}></Route>

              <Route 
                  exact
                  path="/student-profile/:id"
                  element = {<StudentProfile />}></Route>

              <Route
                  exact
                  path="/edit-student/:id"
                  element = {<EditStudent />}></Route>
            </Routes>

       </Router>
       
       
    </>
  )
}

export default App
