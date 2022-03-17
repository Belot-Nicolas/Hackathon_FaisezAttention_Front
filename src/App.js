
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import './App.css';
import Gameone from './pages/Gameone';
import UserProvider from './contexts/UserProvider';
import logoBlanc from './assets/logoBlanc.png';

function App() {
  return (
    <div className="App">
      
      <h1><img className='Title' src={logoBlanc}/></h1>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginDashboard />} />
        
          <Route path='/Game' element={<Gameone/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
