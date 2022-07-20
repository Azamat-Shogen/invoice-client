import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/auth/auth';
import RequireAuth from './components/auth/RequireAuth';
import NavBar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Invoice from './components/pages/invoice/Invoice';
import Login from './components/pages/login/Login';
import Profile from './components/pages/profile/Profile';
import Register from './components/pages/register/Register';
import PageNotFound from './components/pages/pageNotFound/PageNotFound';
import Users from './components/pages/users/Users';


function App() {

  
  return (
    <div className="app"> 
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
          } />
        <Route path='users' element={<Users />}/>
        <Route path='invoice' element={
          <RequireAuth>
                    <Invoice />
          </RequireAuth>
          } />   
        <Route path="*" element={<PageNotFound />} />   
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
