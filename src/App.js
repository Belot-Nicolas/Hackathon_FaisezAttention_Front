
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import Game from './pages/Game'
import Gameone from '../src/pages/Gameone'
import UserProvider from './contexts/UserProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1>Hello</h1>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginDashboard />} />
          <Route path='/game/:email' element={<Game />} />
        </Routes>
      </UserProvider>

    </div>
  );
}

export default App;
