
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import './App.css';
<<<<<<< HEAD
import Gameone from '../src/Gameone'
=======
import UserProvider from './contexts/UserProvider';
>>>>>>> 6c23ceafd7a2956950743123605bbe4858f2b52f

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Gameone />
      
      
=======
      <h1>Hello</h1>
       <UserProvider>
          <Routes>
            <Route path ='/' element={<LoginDashboard/>} />
          </Routes> 

        </UserProvider>
>>>>>>> 6c23ceafd7a2956950743123605bbe4858f2b52f
    </div>
  );
}

export default App;
