import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserProvider from './components/contexts/UserProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <h1> Hello</h1>
       <Routes>
      </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
