import React from "react";
import "./assets/sass/App.scss";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
/* pagina principal Aqui iran todas las vistas  */
const App = () => {
  return (
    <div>
      <p>
        To Do <b>List</b>
      </p>
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default App;
