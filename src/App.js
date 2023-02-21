import logo from './logo.svg';


import './App.css';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Tutorial from './components/Tutorial';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/head" element={<Header />} />
          <Route path="/registrationform" element={<RegistrationForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/tutorial' element={<Tutorial />} />
          <Route path='/home' element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
