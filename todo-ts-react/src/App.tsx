import { FaPen, FaClipboardList } from "react-icons/fa";
import TodoList from "./components/TodoList";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <h1>Todo List</h1>
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
