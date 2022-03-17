import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import Game from './pages/Game'
import Gameone from '../src/pages/Gameone';
import Gametwo from '../src/pages/Gametwo';
import UserProvider from './contexts/UserProvider';
import './App.css';
// import logoBlanc from './assets/logoBlanc.png';

function App() {
  return (
    <div className="App">
      {/* <h1><img className='Title' src={logoBlanc}/></h1> */}
        <UserProvider>
          <Routes>
            <Route path ='/' element={<LoginDashboard/>} />
            <Route path='/game' element={<Gameone/>} />
            <Route path='/game2' element={<Gametwo/>}/>
            <Route path='/game/:email' element={<Game />} />
          </Routes> 
        </UserProvider>
    </div>
  );
}

export default App;