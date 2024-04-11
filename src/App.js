import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Component/Landing/Layout';
import Header from './Component/Landing/Header';
import Footer from './Component/Landing/Footer';
import Home from './Component/Landing/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Gallery from './Component/Landing/Gallery';
import Newsletter from './Component/Landing/Newsletter';
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
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='/news' element={<Newsletter />}></Route>
           
          </Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blog' element={<Blog />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
