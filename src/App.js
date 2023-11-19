import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  const todos = [
    { id: 0, title: "Make dinner", completed: false },
    { id: 1, title: "Make bed", completed: true },
  ];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </div>
  );
}

export default App;
