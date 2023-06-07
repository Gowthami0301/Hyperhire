import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookStore from "./component/bookstore/BookStore.layout"
import Header from './component/Header';
import { Footer } from 'antd/es/layout/layout';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';

function App() {
  return (
    <div className="App">
       <BrowserRouter basename='/Hyperhire'>
       <Header />
        <Routes>
          <Route exact path="/Hyperhire" element={<BookStore />} />
          <Route path="/" element={<BookStore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
