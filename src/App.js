
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/login/LoginDashboard';
import Register from './components/admin/register/Register';
import './App.css';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue</h1>
      <img src='./assets/logo.png' alt='logo Enedis' />
       <UserProvider>
          <Routes>
            <Route path ='/login' element={<LoginDashboard/>} />
            <Route path ='/admin' element={<Register/>} />
          </Routes> 

        </UserProvider>
    </div>
  );
}

export default App;
