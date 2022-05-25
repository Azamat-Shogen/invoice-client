import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Invoice from './components/pages/Invoice';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';

function App() {

  
  return (
    <div className="App"> 
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='user' element={<Profile />} />
        <Route path='invoice' element={<Invoice />} />
        
      </Routes>
    </div>
  );
}

export default App;
