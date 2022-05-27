import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Invoice from './components/pages/invoice/Invoice';
import Login from './components/pages/login/Login';
import Profile from './components/pages/profile/Profile';
import Register from './components/pages/register/Register';

function App() {

  
  return (
    <div className="app"> 
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
