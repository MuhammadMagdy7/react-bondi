import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Home from './pages/Home'
import Navbar2 from './components/Navbar/Navbar2';




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar2 />


      <Routes>

      <Route path='/react-bondi/' element={<Home />} />


        <Route path='/react-bondi/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
//       <div className=''>

// <div className="card" style="width: 18rem;">
// 
// </div>

// </div>