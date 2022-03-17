
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import Register from '.'
import Gameone from './components/Gameone'
import './App.css';
<<<<<<< HEAD
=======
import Gameone from './pages/Gameone'
>>>>>>> 9e734637d4f015c217eb46d96a260e18d3493bfb
import UserProvider from './contexts/UserProvider';
import logoBlanc from './assets/logoBlanc.png';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     
      <h1>Hello</h1>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginDashboard />} />
          <Route path='/jeux' element={<Gameone />} />
          <Route path='/admin' element={<Register />} />
=======
      
      <h1><img className='Title' src={logoBlanc}/></h1>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginDashboard />} />
        
          <Route path='/Game' element={<Gameone/>} />
>>>>>>> 9e734637d4f015c217eb46d96a260e18d3493bfb
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
