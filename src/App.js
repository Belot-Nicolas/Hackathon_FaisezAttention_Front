
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import Game from './pages/Game'
import Gameone from '../src/pages/Gameone'
import logoBlanc from './assets/logoBlanc.png';
import './App.css';

import UserProvider from './contexts/UserProvider';


function App() {
  return (
    <div className="App">
      <h1><img className='Title' src={logoBlanc}/></h1>
     
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginDashboard />} />
          <Route path='/admin' element={<Register />} />
          <Route path='/Game' element={<Gameone/>} />
          <Route path='/game/:email' element={<Game />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
