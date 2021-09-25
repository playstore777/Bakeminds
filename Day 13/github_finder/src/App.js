import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/user/UserItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <UserItem />
      </header>
    </div>
  );
}

export default App;
