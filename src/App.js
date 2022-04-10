import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App container text-align-center">
      <Counter />
      <Posts />
    </div>
  );
}

export default App;
