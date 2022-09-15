import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import User from "./components/User";
import AddNewToDo from "./components/AddNewToDo";
import Calendar from "./components/Calendar";
import EditToDo from "./components/EditToDo";
import Projects from "./components/Projects";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Header>
        <User />
        <AddNewToDo />
        <Calendar />
        <Projects />
      </Header>
      <Main>
        <Todos />
        <EditToDo />
      </Main>
    </div>
  );
}

export default App;
