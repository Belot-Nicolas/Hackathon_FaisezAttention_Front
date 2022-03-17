
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import Register from '.'
import Gameone from './components/Gameone'
import './App.css';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <div className="App">
     
      <h1>Hello</h1>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginDashboard />} />
          <Route path='/jeux' element={<Gameone />} />
          <Route path='/admin' element={<Register />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
