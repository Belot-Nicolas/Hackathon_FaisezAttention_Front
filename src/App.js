
import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<LoginDashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
