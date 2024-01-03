// import  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screen/Home';
import About from "./Screen/About";
import Contact from "./Screen/Contact";
import Services from "./Screen/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
