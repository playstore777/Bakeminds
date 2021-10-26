import './App.css';
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar';
import { FormFields } from './components/FormFields/FormFields';

function App() {
  return (
    <div>
      <Header title="Livine" />
      <NavBar />
      <FormFields />
    </div>
  );
}

export default App;
