import logo from './logo.svg';
import './App.css';

import Home from './home/Home';
import AboutUs from './about-us/AboutUs';
import Blogs from './blogs/Blogs';
import SingleBlog from './single-blog/SingleBlog';
import NavBar from './navbar/NavBar'
import Footer from './footer/Footer'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/blogs" element={<Blogs />} />
          {/* <Route exact path="/blogs/:id" element={<SingleBlog />} /> */}
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
