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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/header' element={<Header />}></Route>
            <Route path='/Footer' element={<Footer />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
