import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Interests from "../components/Interests";
import NavBar from '../components/NavBar';

const PortfolioContainer = () => {
    return ( 
      <div className='app'>
        <Router>
            <NavBar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/portfolio" element={< Portfolio />} />
          <Route path="/experience" element={< Experience />} />
          <Route path="/interests" element={< Interests />} />
        </Routes>
      </Router>
      </div>

     );
}
 
export default PortfolioContainer;