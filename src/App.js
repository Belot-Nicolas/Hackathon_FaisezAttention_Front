
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import './App.css';
import Gameone from '../src/Gameone'
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <div className="App">
      <Gameone />
      <h1>Hello</h1>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginDashboard />} />
        </Routes>
      </UserProvider>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginDashboard />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
