
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/login/LoginDashboard';
import Register from './components/admin/register/Register';
import Game from './pages/Game';
import Gameone from './pages/Gameone';
import Gametwo from './pages/Gametwo';
import UserProvider from './contexts/UserProvider';
import logoBlanc from './assets/logoBlanc.png';
import './App.css';



function App() {
  return (
    <div className="App">
        <UserProvider>
          <Routes>
            <Route path ='/' element={<LoginDashboard/>} />
            <Route path = '/admin' element={<Register/>} />
            <Route path='/game' element={<Gameone/>} />
            <Route path='/game2' element={<Gametwo/>} />
            <Route path='/game/:email' element={<Game />} />
          </Routes> 
        </UserProvider>

    </div>
  );
}

export default App;
