import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Search } from './search.svg';
import { ReactComponent as More } from './more.svg';
import { ReactComponent as Notibtn } from './notibtn.svg';
import { Routes, Route, Link, useNavigate, useLocation, Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, updateuser } from './store.js';
import './App.css';
import Login from './login';
import PasswordInput from './passwordinput'
import Signup from './signup';
import SkillSelection from './skillselection';
import Workplacesetup from './workplacesetup';
import Tagsetup from './tagsetup';
import Navbar from './navbar';

function App() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/login/email"
        || location.pathname === "/login/password"
        || location.pathname === "/signup"
        || location.pathname === "/skillselect"
        || location.pathname === "/workplacesetup"
        || location.pathname === "/tagsetup" ? null : <Navbar navigate={navigate}></Navbar>}
      <Routes>
        <Route path='/login/email' element={
          <Login navigate={navigate} />
        } />
        <Route path='/login/password' element={
          <PasswordInput navigate={navigate} />
        } />
        <Route path='/signup' element={
          <Signup navigate={navigate} />
        } />
        <Route path='/skillselect' element={
          <SkillSelection navigate={navigate} />
        } />
        <Route path='/workplacesetup' element={
          <Workplacesetup navigate={navigate} />
        } />
        <Route path='/tagsetup' element={
          <Tagsetup navigate={navigate} />
        } />
      </Routes>
    </div>
  );
}


export default App;