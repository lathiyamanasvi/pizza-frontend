import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Login from './Component/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Header/>}></Route> */}
          <Route path='/' element={<Header/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
