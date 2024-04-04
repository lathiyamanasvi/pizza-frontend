import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Component/Layout';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';

// Admin
import AdminDashboard from './Admin/AdminDashboard';
import Admin_Add from './Admin/Admin_Add';
import Admin_Header from './Admin/Admin_Header';
import Admin_Layout from './Admin/Admin_Layout'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/header' element={<Header />}></Route>
            <Route path='/Footer' element={<Footer />}></Route>
          </Route>

          {/* Admin Routes */}
          <Route path='/' element={<Admin_Layout />}>
            <Route path='/AdminDashboard' element={<AdminDashboard />}></Route>
            <Route path='/Admin_Add' element={<Admin_Add />}></Route>
            <Route path='/Admin_Header' element={<Admin_Header />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
